import { Dispatch, SetStateAction } from 'react';
import { CalculatorDisplay, CalculatorKey } from '../../interfaces';
import { Button } from '../../components/Button';
import { CALCULATOR_KEYS } from '../../constants';

type Props = {
  calculatorKey: CalculatorKey;
  setCalulatorDisplay: Dispatch<SetStateAction<CalculatorDisplay>>;
  className?: string;
};

export function CalculatorKeyButton({
  calculatorKey: { id, value },
  setCalulatorDisplay,
  className = '',
}: Props) {
  const MAXIMUM = 20;

  const onClick = () => {
    setCalulatorDisplay(({ history, result }: CalculatorDisplay) => {
      const defaultCase = { history, result };
      const resetCase = { history: '', result: '' };
      const regExDecimal = /\./;
      const regExEqual = /=/;
      const regExOperator = /^[/*+-]$/;
      const regExOperatorConsecutive = /^[/*+-]{2}$/;
      const regExOperatorConsecutiveNegative = /--/g;
      const regExOperatorOnlyOneNegative = /^-$/;
      const regExNumber = /[0-9]/;

      // clear AC
      if (id === CALCULATOR_KEYS.clear.id) {
        return resetCase;
      }
      // No 0 duplication
      if (id === CALCULATOR_KEYS.zero.id && result === '') {
        return defaultCase;
      }
      // Already calculated
      if (id === CALCULATOR_KEYS.equals.id && result === '') {
        return defaultCase;
      }
      if (id === CALCULATOR_KEYS.equals.id && regExEqual.test(history)) {
        return defaultCase;
      }
      // Already have negative
      if (
        id === CALCULATOR_KEYS.subtract.id &&
        regExOperatorOnlyOneNegative.test(history)
      ) {
        return defaultCase;
      }

      // Calculate result
      if (id === CALCULATOR_KEYS.equals.id) {
        let newHistory = history;
        for (let i = 0; i < 2; i += 1) {
          if (regExOperator.test(newHistory.slice(-1))) {
            newHistory = newHistory.slice(0, -1);
          }
        }

        // NOTE: eval is not recommended, if have time implement calculation method
        // eslint-disable-next-line no-eval
        const newHistoryCal = eval(
          newHistory.replace(regExOperatorConsecutiveNegative, '+')
        );

        return {
          history: `${newHistory}=${newHistoryCal}`,
          result: newHistoryCal,
        };
      }

      // Number Decimal and Operator
      if (
        regExNumber.test(value) ||
        regExDecimal.test(value) ||
        regExOperator.test(value)
      ) {
        // After click equal
        if (regExEqual.test(history)) {
          if (regExNumber.test(value)) {
            return {
              history: '',
              result: value,
            };
          }
          if (regExOperator.test(value)) {
            return {
              history: result + value,
              result: value,
            };
          }
        }

        // Duplicate operator
        if (regExOperator.test(value) && regExOperator.test(result)) {
          // Exceed 2 consecutive negative (No action)
          if (
            id === CALCULATOR_KEYS.subtract.id &&
            regExOperatorConsecutive.test(history.slice(-2))
          ) {
            return defaultCase;
          }
          // Except for negative to have 2 consecutive negative
          if (
            id === CALCULATOR_KEYS.subtract.id &&
            regExOperator.test(history.slice(-1))
          ) {
            return {
              history: history + value,
              result: value,
            };
          }
          // Already have 2 operator, renew operator
          if (regExOperatorConsecutive.test(history.slice(-2))) {
            return {
              history: history.slice(0, -2) + value,
              result: value,
            };
          }
          // Already have 1 operator, renew operator
          return {
            history: history.slice(0, -1) + value,
            result: value,
          };
        }
        // Change state from number to operator and operator to number
        if (regExOperator.test(value) || regExOperator.test(result)) {
          return {
            history: history + value,
            result: value,
          };
        }

        // Increment value
        if (regExNumber.test(value) || regExDecimal.test(value)) {
          // Limit maximum
          if (result.length >= MAXIMUM) {
            return defaultCase;
          }

          // No decimal duplication
          if (regExDecimal.test(value) && regExDecimal.test(result)) {
            return defaultCase;
          }
          return {
            history: history + value,
            result: result + value,
          };
        }
      }

      return defaultCase;
    });
  };

  return (
    <Button
      id={id}
      onClick={onClick}
      className={`p-24 bg-gray-600 hover:!bg-gray-700 ${className}`}
    >
      {value || '0'}
    </Button>
  );
}

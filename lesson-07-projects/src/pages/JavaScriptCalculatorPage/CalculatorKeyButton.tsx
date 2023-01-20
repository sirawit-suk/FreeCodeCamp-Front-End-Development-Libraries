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
  const onClick = () => {
    setCalulatorDisplay(({ history, result }: CalculatorDisplay) => {
      const defaultCase = { history, result };
      const resetCase = { history: '', result: '' };
      const regExDecimal = /\./;

      if (result.match(regExDecimal) && id === CALCULATOR_KEYS.decimal.id) {
        return defaultCase;
      }
      if (id === CALCULATOR_KEYS.clear.id) {
        return resetCase;
      }

      defaultCase.history += value;
      defaultCase.result += value;

      // if (isFloat(result) && id === CALCULATOR_KEYS.decimal.id) {
      //   return defaultCase;
      // }
      // if (id === CALCULATOR_KEYS.zero.id && result === 0) {
      //   return defaultCase;
      // }
      // if (id === CALCULATOR_KEYS.clear.id) {
      //   return resetCase;
      // }

      return defaultCase;
    });
  };

  return (
    <Button
      id={id}
      onClick={onClick}
      className={`p-24 bg-gray-600 ${className}`}
    >
      {value || '0'}
    </Button>
  );
}

import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../components';
import { Clock } from '../../interfaces/clock-model';

type Props = {
  id: string;
  name: string;
  clock: Clock;
  valueId: string;
  incrementId: string;
  decrementId: string;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
};

export function Panel({
  id,
  name,
  clock,
  valueId,
  incrementId,
  decrementId,
  onClickIncrement,
  onClickDecrement,
}: Props) {
  return (
    <div
      id={id}
      className="flex flex-col items-center bg-slate-50 border border-gray-700 rounded-2xl p-6"
    >
      <div className="text-xl mb-4">{name}</div>
      <div className="flex flex-row justify-center items-center gap-4">
        <Button id={decrementId} onClick={onClickDecrement}>
          <FontAwesomeIcon icon={faArrowDown} />
        </Button>
        <div className="text-xl" id={valueId}>
          {valueId === 'break-length' ? clock.breakLength : clock.sessionLength}
        </div>
        <Button id={incrementId} onClick={onClickIncrement}>
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </div>
    </div>
  );
}

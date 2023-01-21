import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import {
  faDownLeftAndUpRightToCenter,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { MarkdownStatus } from '../../constants';

type Props = {
  name: string;
  children?: React.ReactNode;
  classNameBar?: string;
  statusType: MarkdownStatus;
  status: MarkdownStatus;
  setStatus: (status: MarkdownStatus) => void;
};

export function WindowFrame({
  children,
  name,
  classNameBar,
  statusType,
  status,
  setStatus,
}: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={`w-full min-h-min shadow-lg ${
        status === MarkdownStatus.default || status === statusType
          ? ''
          : 'hidden'
      }`}
    >
      <div
        className={`flex justify-between items-center w-full bg-gray-700  ${classNameBar}`}
      >
        <div className="flex items-center text-white gap-2 ml-4">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          {name}
        </div>

        <Button
          className="!bg-gray-700 hover:text-gray-300"
          onClick={() => {
            if (status !== statusType) {
              setStatus(statusType);
            } else {
              setStatus(MarkdownStatus.default);
            }
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
          ) : (
            <FontAwesomeIcon icon={faExpand} />
          )}
        </Button>
      </div>
      {children}
    </div>
  );
}

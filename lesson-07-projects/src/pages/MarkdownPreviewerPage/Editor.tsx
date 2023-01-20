import Markdown from 'marked-react';
import { MarkdownStatus } from '../../constants';

type Props = {
  id: string;
  name: string;
  cols?: number;
  rows?: number;
  className?: string;
  placeholder?: string;
  textEditor: string;
  status: MarkdownStatus;
  setTextEditor: (text: string) => void;
};

export function Editor({
  id,
  name,
  cols,
  rows,
  className = '',
  placeholder,
  textEditor,
  status,
  setTextEditor,
}: Props) {
  return (
    <textarea
      className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 ${className}`}
      style={{
        minHeight:
          status === MarkdownStatus.editor ? 'calc(100vh - 10rem)' : '12rem',
      }}
      placeholder={placeholder}
      name={name}
      value={textEditor}
      id={id}
      cols={cols}
      rows={rows}
      onChange={(event) => setTextEditor(event.target.value)}
    />
  );
}

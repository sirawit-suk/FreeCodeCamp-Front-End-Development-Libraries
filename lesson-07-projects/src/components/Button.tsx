type Props = {
  id?: string;
  name?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({ name, id, onClick, children, className }: Props) {
  return (
    <button
      id={id}
      type="button"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children || name}
    </button>
  );
}

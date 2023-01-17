import { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full max-w-lg  p-4 bg-white shadow-lg rounded ${className}`}
    >
      {children}
    </div>
  );
}

import { ReactNode } from 'react';

export function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen bg-neutral-200">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-screen bg-neutral-200">
        {children}
      </div>
    </div>
  );
}

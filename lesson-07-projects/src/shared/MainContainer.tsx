import { ReactNode } from 'react';

export function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <div className="min-h-screen container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-neutral-200">
        {children}
      </div>
    </div>
  );
}

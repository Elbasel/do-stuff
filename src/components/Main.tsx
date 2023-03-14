import React from 'react';

type Props = { children: React.ReactNode };

export const Main = ({ children }: Props) => {
  return (
    <main className="bg-zinc-900 text-green-400 h-[100vh] h-[100dvh] text-3xl py-8 px-2 overflow-hidden">
      {children}
    </main>
  );
};

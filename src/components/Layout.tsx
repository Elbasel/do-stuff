import React from 'react';
import { classNames } from '../utils/classNames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col h-screen p-2 overflow-hidden text-3xl text-green-400 bg-zinc-900',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;

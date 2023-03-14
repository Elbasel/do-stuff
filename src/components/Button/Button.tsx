import React from 'react';

type Props = {
  children: React.ReactNode | string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  type = 'button',
  className = '',
  onClick = () => {},
}: Props) => {
  return (
    <button className={`${styles} ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const styles =
  'text-base border-2 rounded-md p-2 border-green-500 focus:background-green-500 focus:outline-none hover:bg-green-500 hover:cursor-pointer hover:text-blue-900 active:scale-[0.95] transition-all';

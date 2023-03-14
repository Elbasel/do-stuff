import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode | string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  variant?: 'outline' | 'solid' | 'default';
};

export const Button = ({
  children,
  type = 'button',
  className = '',
  onClick = () => {},
  variant = 'default',
}: Props) => {
  const baseClasses =
    'text-base rounded-md p-2 focus:outline-none hover:bg-green-500 hover:cursor-pointer hover:text-blue-900 active:scale-[0.95] transition-all';

  const variantClasses = {
    outline: 'border-2 border-green-500',
    solid: 'bg-green-500 text-white',
    default: 'border-2 border-gray-500',
  };

  const classes = twMerge(baseClasses, variantClasses[variant], className);

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

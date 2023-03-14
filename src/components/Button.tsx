import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  [
    [
      'text-base',
      'rounded-md',
      'p-2',
      'focus:outline-none',
      'hover:bg-green-500',
      'hover:cursor-pointer',
      'hover:text-blue-900',
      'active:scale-[0.95]',
      'transition-all',
    ],
  ],
  {
    variants: {
      style: {
        default: [],
        outline: ['border-2', 'border-green-500'],
        solid: ['bg-green-500', 'text-white'],
      },
    },
  }
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const buttonClassNames = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));

type Props = {
  style?: 'outline' | 'solid' | 'default';
  children?: React.ReactNode | string;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  style = 'default',
  children = 'button',
  type = 'button',
  className = '',
  onClick = () => {},
}: Props) => {
  console.log(buttonClassNames);
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonClassNames({ style })} ${className}`}
    >
      {children}
    </button>
  );
};

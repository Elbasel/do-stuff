import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

type Props = { className?: string };

export const Footer = ({ className = '' }: Props) => {
  return (
    <footer
      className={`${className} mt-auto text-sm text-center`}
    >
      Made with ❤️ by
      <a
        href="https://www.github.com/elbasel"
        className="transition-colors hover:text-blue-500"
      >
        {' '}Abdelrahman Elbasel
      </a>
    </footer>
  );
};

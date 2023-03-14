import React from 'react';
import { AiFillWechat } from 'react-icons/ai';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="flex justify-center gap-4">
      <AiFillWechat />
      <h1 className="">Type something</h1>
    </header>
  );
};

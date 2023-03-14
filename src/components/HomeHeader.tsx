import React from 'react';
import { AiFillWechat } from 'react-icons/ai';

type Props = {
  hidden?: boolean;
  style?: React.CSSProperties;
};

export const HomeHeader = ({ hidden = false, style }: Props) => {
  return (
    <header hidden={hidden} style={style} className="flex justify-center gap-4">
      <AiFillWechat />
      <h1 className="">Type something</h1>
    </header>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { AiFillWechat } from 'react-icons/ai';

import { classNames } from '../utils/classNames';
import { ViewportSize } from '../utils/getViewableArea';
import { useViewableArea } from '../hooks/useViewableArea';

type Props = {};

const Main = (props: Props) => {
  const [command, setCommand] = useState('');

  const [clicked, setClicked] = useState(false);
  const { viewableArea } = useViewableArea();

  const mainInput = useRef<HTMLInputElement>(null);

  const focusMainInput = () => {
    if (mainInput.current) {
      mainInput.current.focus();
    }
  };

  let handleClick = () => {
    // only run once
    setClicked(true);
    handleClick = () => {};
  };

  useEffect(() => {
    console.log('viewableArea', viewableArea);
    return () => {};
  }, [viewableArea]);

  return (
    <main className="bg-zinc-900 text-green-400 h-[100vh] h-[100dvh] text-3xl py-8 px-2">
      <header className="flex justify-center gap-4">
        <AiFillWechat />
        <h1 className="">Type something</h1>
      </header>
      {/* input container */}
      <div
        onClick={() => handleClick()}
        className="flex h-[11vh] mt-4 rounded-lg py-[2px] relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-300"
      >
        {/* fake-placeholder */}
        {!clicked && (
          <div
            className={classNames(
              'absolute z-10 pointer-events-none top-1/2 -translate-y-1/2 w-full px-4',
              {
                clicked: 'slide-out',
              }
            )}
          >
            {'>'}
          </div>
        )}
        <input
          ref={mainInput}
          type="text"
          // ! text-red-200
          className="absolute block focus:outline-none text-red-200 focus:ring-2 focus:ring-green-400 rounded-lg px-4 w-[99.5%] left-1/2 -translate-x-1/2 py-4 bg-zinc-800"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
      </div>
    </main>
  );
};

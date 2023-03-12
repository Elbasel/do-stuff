import React, { useEffect, useRef, useState } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { useGetViewableArea } from '../hooks/useViewableArea-Test';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Form from './Form';

type Props = {};

const commonStyles =
  'absolute h-full px-4 py-4 outline-none w-[99%] rounded-lg -left-[10px] -top-[10px] overflow-hidden';

export const Main = (props: Props) => {
  // state
  const [command, setCommand] = useState('');
  const [ready, setReady] = useState(false);
  const [promptShown, setPromptShown] = useState(false);

  const [parent, enableAnimations] = useAutoAnimate({});

  const viewableArea = useGetViewableArea();

  const mainInput = useRef<HTMLTextAreaElement>(null);

  const focusMainInput = () => {
    mainInput.current?.focus();
  };

  // event handlers

  const handleSubmit = () => {};

  const handleBlur = () => {
    if (mainInput.current?.value) return;
    setPromptShown(false);
  };

  let handleClick = () => {
    if (!ready) return;
    // only run once
    setPromptShown(true);
    handleClick = () => {};
  };

  useEffect(() => {
    console.log('viewableArea', viewableArea);
    setReady(true);
    return () => {};
  }, [viewableArea]);

  return (
    <main className="bg-zinc-900 text-green-400 h-[100vh] h-[100dvh] text-3xl py-8 px-2 overflow-hidden">
      <header className="flex justify-center gap-4">
        <AiFillWechat />
        <h1 className="">Type something</h1>
      </header>
      {/* input container */}
      <div
        ref={parent}
        onClick={() => handleClick()}
        className="glow mt-8 rounded-lg h-[100px] w-[87vw] mx-auto max-w-lg flex items-center relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-300"
      >
        {/* fake-placeholder */}
        {!promptShown && (
          <div className={`${commonStyles} z-10 pointer-events-none`}>
            {'>'}
          </div>
        )}
        <Form name="command" onSubmit={handleSubmit} />
        <textarea
          ref={mainInput}
          style={{ resize: 'none' }}
          onBlur={handleBlur}
          className={`${commonStyles} bg-zinc-800 border-0`}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
      </div>
    </main>
  );
};

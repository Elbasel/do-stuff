import React, { useEffect, useRef, useState } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { useGetViewableArea } from '../hooks/useViewableArea-Test';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Form from './Form';

type Props = {};

// styles for both the fake placeholder and the textarea
// get the fake placeholder to be the same size as the textarea 
const commonStyles =
  'absolute h-full px-4 py-4 outline-none w-[99%] rounded-lg -left-[10px] -top-[10px] overflow-hidden';

export const Main = (props: Props) => {
  // ! state
  const [inputValue, setCommand] = useState('');
  const [promptShown, setPromptShown] = useState(false);

//   auto animate the fake placeholder
  const [parent, enableAnimations] = useAutoAnimate({});

  // {width: number, height: number} 
  const viewableArea = useGetViewableArea();


  const mainInput = useRef<HTMLTextAreaElement>(null);

  const focusMainInput = () => {
    mainInput.current?.focus();
  };

  // event handlers
  const handleSubmit = () => {};

  const handleInputBlur = () => {
    if (mainInput.current?.value) return;
    setPromptShown(false);
  };

  let handleInputClick = () => {
    setPromptShown(true);
    // only run once
    handleInputClick = () => {};
  };

  useEffect(() => {
    console.log('viewableArea', viewableArea);
  }, [viewableArea]);

  useEffect(() => {
  }, []);

  return (
    <main className="bg-zinc-900 text-green-400 h-[100vh] h-[100dvh] text-3xl py-8 px-2 overflow-hidden">
      <header className="flex justify-center gap-4">
        <AiFillWechat />
        <h1 className="">Type something</h1>
      </header>
      {/* input container */}
      <div
        ref={parent}
        onClick={() => handleInputClick()}
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
          onBlur={handleInputBlur}
          className={`${commonStyles} bg-zinc-800 border-0`}
          value={inputValue}
          onChange={(e) => setCommand(e.target.value)}
        />
      </div>
    </main>
  );
};

import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';

type Props = {};

const TextArea = (props: Props) => {
  const [promptVisible, setPromptVisible] = useState(true);
  const [parent, enableAnimations] = useAutoAnimate({});
  const mainInput = useRef<HTMLTextAreaElement>(null);

  // utility functions
  const focusMainInput = () => {
    mainInput.current?.focus();
  };
  const [textAreaValue, setTextAreaValue] = useState('');

  // handle events
  const handleBlur = () => {
    if (mainInput.current?.value) return;
    // ! promptVisible = true
    setPromptVisible(true);
  };

  let handleClick = () => {
    // ! promptVisible = false
    setPromptVisible(false);
    handleClick = () => {};
  };

  const handleSubmit = () => {};

  return (
    <div
      ref={parent}
      onClick={() => handleClick()}
      className={classNames(
        'animate-background mt-8 rounded-lg h-[100px] w-[87vw] mx-auto max-w-lg flex items-center relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-300',
        !promptVisible && 'ring-offset-green-600 ring-2'
      )}
    >
      {/* fake-placeholder */}
      {promptVisible && (
        <div className={`${commonStyles} z-10 pointer-events-none`}>{'>'}</div>
      )}
      <textarea
        ref={mainInput}
        onBlur={handleBlur}
        className={`${commonStyles} bg-zinc-800 border-0 resize-none`}
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
    </div>
  );
};

const commonStyles =
  'absolute h-full px-4 py-4 outline-none w-[99%] rounded-lg -left-[10px] -top-[10px] overflow-hidden';

export default TextArea;

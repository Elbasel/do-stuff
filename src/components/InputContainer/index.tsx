import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useRef, useState } from 'react';
import Form from '../Form';

const commonStyles =
  'absolute h-full px-4 py-4 outline-none w-[99%] rounded-lg -left-[10px] -top-[10px] overflow-hidden';

type Props = {};

const InputContainer = (props: Props) => {
  const mainInput = useRef<HTMLTextAreaElement>(null);
  const [promptShown, setPromptShown] = useState(false);

  const focusMainInput = () => {
    mainInput.current?.focus();
  };
  const [inputValue, setCommand] = useState('');

  const handleInputBlur = () => {
    if (mainInput.current?.value) return;
    setPromptShown(false);
  };

  let handleInputClick = () => {
    setPromptShown(true);
    handleInputClick = () => {};
  };

  const handleSubmit = () => {};
  const [parent, enableAnimations] = useAutoAnimate({});

  return (
    <div
      ref={parent}
      onClick={() => handleInputClick()}
      className="glow mt-8 rounded-lg h-[100px] w-[87vw] mx-auto max-w-lg flex items-center relative overflow-hidden bg-gradient-to-r from-green-400 via-green-500 to-green-300"
    >
      {/* fake-placeholder */}
      {!promptShown && (
        <div className={`${commonStyles} z-10 pointer-events-none`}>{'>'}</div>
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
  );
};

export default InputContainer;

import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import { FiCopy } from 'react-icons/fi';

export type message = {
  id: number;
  text: string;
};

type Props = {
  messages: message[];
};

export const Conversation = ({ messages }: Props) => {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <div
      // onMouseEnter={() => document.querySelector('.homeInput')?.blur()}
      hidden={messages.length === 0}
      ref={parent}
      className="conversations mt-4 text-base hover:text-lg max-h-[50vh] transition-all duration-300 hover:border border-blue-200 p-2 rounded-lg overflow-hidden hover:overflow-auto"
    >
      {messages
        .slice()
        .reverse()
        .map((message: { id: number; text: string }) => (
          <div key={message.id}>
            <div className="flex justify-between">
              <p>{message.text}</p>
              <FiCopy className="hover:text-green-300" />
            </div>
            <div className="my-2 border-t border-blue-400" />
          </div>
        ))}
    </div>
  );
};

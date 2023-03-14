import React from 'react';

export type message = {
  id: number;
  text: string;
};

type Props = {
  messages: message[];
};

export const Conversation = ({ messages }: Props) => {
  return (
    <div className="mt-4 overflow-y-auto text-base max-h-[50vh]">
      {messages.map((message: { id: number; text: string }) => (
        <>
          <p key={message.id}>{message.text}</p>
          <div className='my-2 border-t border-black'/>
        </>
      ))}
    </div>
  );
};

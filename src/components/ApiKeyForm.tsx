import React from 'react';
import { classNames } from '../utils/classNames';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';

type Props = { fullscreen: boolean };

export const ApiKeyForm = ({ fullscreen }: Props) => {
  return (
    <div
      className={classNames(
        'bg-black text-white p-4',
        fullscreen && 'h-screen h-[100dvh] w-screen overflow-hidden'
      )}
    >
      <Form onSubmit={() => {}} />
      <Input />
      <Button type="submit">Add Key</Button>
    </div>
  );
};

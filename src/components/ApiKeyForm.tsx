import React from 'react';
import { classNames } from '../utils/classNames';
import { Button } from './Button';
import { Form } from './Form';
import { Input } from './Input';
import { SlClose } from 'react-icons/sl';
import Layout from './Layout';

type Props = { fullscreen: boolean; closeModal: () => void };

export const ApiKeyForm = ({ fullscreen, closeModal }: Props) => {
  return (
    <Layout
      className={classNames(
        'bg-black text-white',
        fullscreen && 'h-screen h-[100dvh] w-screen overflow-hidden'
      )}
    >
      <Button
        onClick={closeModal}
        className="ml-auto text-red-600 w-fit hover:text-white"
        style="outline"
      >
        <SlClose />
      </Button>
    </Layout>
  );
};

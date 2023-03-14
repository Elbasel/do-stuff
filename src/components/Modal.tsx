import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../utils/classNames';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  slideFrom?: 'top' | 'bottom' | 'left' | 'right';
  fullscreen?: boolean;
};

export function Modal({
  isOpen,
  onClose = () => {},
  children,
  slideFrom = 'bottom',
  fullscreen = true,
}: Props) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className={classNames(
          'fixed inset-0 z-10',
          fullscreen && 'h-screen h-[100dvh] w-screen overflow-hidden'
        )}
      >
        <Transition.Child
          as={'div'}
          enter="transition linear-ease duration-[300ms]"
          enterFrom={'opacity-0 translate-y-[70vh]'}
          enterTo="opacity-100 translate-y-0"
          leave="duration-[300ms] linear-ease"
          leaveFrom="translate-y-0"
          leaveTo=" translate-y-[100vh]"
        >
          {children}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

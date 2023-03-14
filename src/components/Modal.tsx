import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '../utils/classNames';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  slideFrom?: 'top' | 'bottom' | 'left' | 'right';
  fullscreen?: boolean;
};

const tailwindSafeList = 'y-[100vh] x-[100vw] y-[-100vw] x-[-100vh]';

export function Modal({
  isOpen,
  onClose = () => {},
  children,
  slideFrom,
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
          enter="transition ease-out duration-100"
          enterFrom={'opacity-0 translate-y-4'}
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          {children}
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

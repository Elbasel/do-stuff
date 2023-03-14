import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

type props = {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
};
export const Modal = ({ children, title, open, onClose }: props) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={onClose}>
          <div className="fixed inset-0">
            <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-black opacity-30" />
          </div>
          <div className="flex items-center justify-center h-[100vh] h-[100dvh] w-screen max-w-5xl">
            <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
              </div>
              <div className="p-4">{children}</div>
              <div className="flex justify-end px-4 py-2 bg-gray-100">
                <button
                  onClick={onClose}
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

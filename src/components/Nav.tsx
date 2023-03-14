import React, { useState } from 'react';
import { MdError } from 'react-icons/md';
import { Modal } from './Modal';
import { ApiKeyForm } from './ApiKeyForm';
import { Button } from './Button';

type Props = {};

export const Nav = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    console.log({ modalOpen });
    setModalOpen(true);
  };

  return (
    <nav className="mb-8">
      <ul className="flex justify-end px-8">
        <li>
          <Button
            onClick={handleModalOpen}
            className="flex items-center gap-4"
            type="button"
          >
            Enter Api Key
          </Button>
        </li>
      </ul>
      {/* <EnterApiKeyModal
        open={apiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
      /> */}
      <Modal isOpen={modalOpen} slideFrom="bottom">
        <ApiKeyForm fullscreen closeModal={() => setModalOpen(false)} />
      </Modal>
    </nav>
  );
};

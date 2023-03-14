import React, { useState } from 'react';
import { Button } from '../Button/';
import { MdError } from 'react-icons/md';
import { FullScreenModal } from '../Modal/FullScreenModal';

type Props = {};

export const Nav = (props: Props) => {
  const [modalOpen, setApiKeyModalOpen] = useState(false);

  const handleModalOpen = () => {
    setApiKeyModalOpen(true);
    console.log({ apiKeyModalOpen: modalOpen });
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
            <MdError className="text-red-600" />
            Enter Api Key
          </Button>
        </li>
      </ul>
      {/* <EnterApiKeyModal
        open={apiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
      /> */}
      <FullScreenModal isOpen={modalOpen} onClose={() => {}}>
        <div className="flex flex-col">
          heyo
        </div>
      </FullScreenModal>
    </nav>
  );
};

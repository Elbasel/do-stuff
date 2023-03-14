import React from 'react';
import { Modal } from './Modal';

type Props = {
  open: boolean;
  onClose: () => void;
};

const EnterApiKeyModal = ({ open, onClose }: Props) => {
  return (
    <Modal title="Enter Api Key" open={open} onClose={onClose}>
      <div className="flex flex-col">Key Modal</div>
    </Modal>
  );
};

export default EnterApiKeyModal;

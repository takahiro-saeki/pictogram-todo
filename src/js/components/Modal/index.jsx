import React from 'react';
import { Container, FormField } from './style';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return false;
  }
  return (
    <Container onClick={closeModal}>
      <FormField onClick={e => e.stopPropagation()}>
        <textarea />
        <button type="button">submit</button>
      </FormField>
    </Container>
  );
};

Modal.defaultProps = {
  isOpen: false
};

export default Modal;

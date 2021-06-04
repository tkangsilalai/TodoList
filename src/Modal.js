import { useState, createContext, useContext } from 'react';
import Modal from 'react-modal';

const ModalContext = createContext();

const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

const ModalProvider = (props) => {
  const [modalText, setModalText] = useState(null);

  return (
    <ModalContext.Provider value={[modalText, setModalText]}>
      {props.children}
      <Modal
        isOpen={!!modalText}
        ariaHideApp={false}
        shouldCloseOnOverlayClick
        onRequestClose={() => setModalText(null)}>
        <h2>{modalText}</h2>
      </Modal>
    </ModalContext.Provider>
  );
};

export { useModal, ModalProvider };
import React, { useState } from 'react';

const Context = React.createContext({
  modalStatus: false,
  modalContent: '',
  modalContentHandler: () => {},
  showModal: () => {},
  hideModal: () => {},
});

export const ContextProvider = (props) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalContent, setModalContent] = useState('teacher');

  const showModalHandler = () => {
    setModalStatus(true);
  };

  const hideModalHandler = () => {
    setModalStatus(false);
  };

  const modalContentHandler = (content) => {
    setModalContent(content);
  };

  return (
    <Context.Provider
      value={{
        modalStatus,
        modalContent,
        showModal: showModalHandler,
        hideModal: hideModalHandler,
        modalContentHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;

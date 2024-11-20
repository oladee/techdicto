import React, { createContext, useContext, useState } from "react";
import { contextProps } from "../declaration";


type Provide = {
  openModal : ()=> void;
  afterOpenModal : ()=> void;
  closeModal : ()=> void;
  modalIsOpen : boolean;
  setModalIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext<Provide >(null!);


export const ModalProvider = ({children}:contextProps)=>{
    const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // reference are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const value = {
    closeModal,
    afterOpenModal,
    openModal,
    modalIsOpen,
    setModalIsOpen,
  }
  return(<ModalContext.Provider value={value}>
    {children}

  </ModalContext.Provider>)
}

const useWaitlistModal = ()=> useContext(ModalContext)
export default useWaitlistModal

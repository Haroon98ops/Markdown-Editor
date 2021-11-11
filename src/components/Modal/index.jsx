import React from 'react';
import { ModalBody, ModalHeader, Modal, Button } from "reactstrap";
import { useSelector } from 'react-redux';

export default function MyModal(props) {
    const { modalIsOpen, setmodalIsOpen } = props;
    const { pageID, para, title } = useSelector(state => state)

    return (
        <Modal isOpen={modalIsOpen} toggle={() => setmodalIsOpen(false)}>
            <ModalHeader>
                {title}
            </ModalHeader>
            <ModalBody>
                {para || "Nothing to show here"}
            </ModalBody>
        </Modal>
    )
}
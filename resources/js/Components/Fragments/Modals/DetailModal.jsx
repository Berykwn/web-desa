import React from "react";
import { Modal } from "flowbite-react";

const DetailModal = (props) => {
    const { id, title, body, openDetailModal, setOpenDetailModal } = props;
    
    return (
        <Modal
            show={openDetailModal}
            onClose={() => setOpenDetailModal(false)}
            id={id}
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Body>
                <img className="" src={`/storage/img/albums/${body}`} />
            </Modal.Body>
        </Modal>
    );
};

export default DetailModal;

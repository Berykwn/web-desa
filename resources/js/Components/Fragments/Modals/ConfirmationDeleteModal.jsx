import React from "react";
import { Modal } from "flowbite-react";
import { router } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

const ConfirmDeleteModal = ({ id, name, url, openModal, setOpenModal }) => {
    return (
        <Modal 
            show={openModal === `pup-up${id}`}
            size="md"
            data-pup-up
            onClose={() => setOpenModal(undefined)}
        >
            <Modal.Body>
                <div className="text-center px-4 py-4">
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        Apakah anda yakin akan menghapus data{" "}
                        <span className="font-semibold">{name}</span> ?
                    </h3>
                    <div className="flex justify-center gap-2">
                        <Button
                            className="bg-red-700 hover:bg-red-800"
                            onClick={() => {
                                router.post(url);
                                setOpenModal(undefined);
                            }}
                        >
                            Ya
                        </Button>
                        <Button
                            className="bg-slate-700 hover:bg-slate-800"
                            onClick={() => setOpenModal(undefined)}
                        >
                            Tidak
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmDeleteModal;

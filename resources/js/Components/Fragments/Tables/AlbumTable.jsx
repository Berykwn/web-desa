import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import ConfirmationDeleteModal from "../Modals/ConfirmationDeleteModal";
import DetailModal from "../Modals/DetailModal";

const Header = () => (
    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
            <th scope="col" className="px-6 py-3">
                Gambar
            </th>
            <th scope="col" className="px-6 py-3">
                Nama
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
);

const Body = ({ id, nama, gambar }) => {
    const [openDetailModal, setOpenDetailModal] = useState(undefined);
    const [openModal, setOpenModal] = useState(undefined);
    const modalId = `modal-${id}`;
    
    return (
        <tbody className="bg-white">
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4">
                    <img
                        className="w-16 h-16 rounded"
                        src={`/storage/img/albums/${gambar}`}
                    />
                </th>
                <td scope="row" className="px-6 py-4">
                    {nama}
                </td>
                <td className="px-6 py-4">
                    <div className="flex space-x-1">
                        <button
                            onClick={() => setOpenDetailModal(true)}
                            className="px-3 py-1 text-xs font-medium text-center rounded-lg text-white bg-sky-600 hover:bg-sky-600"
                        >
                            Detail
                        </button>
                        <DetailModal
                            id={modalId}
                            title={nama}
                            body={gambar}
                            openDetailModal={openDetailModal}
                            setOpenDetailModal={setOpenDetailModal}
                        />

                        <button
                            onClick={() => setOpenModal(`pup-up${id}`)}
                            className="px-3 py-1 text-xs font-medium text-center rounded-lg text-white bg-red-600 hover:bg-red-600"
                        >
                            Hapus
                        </button>

                        <ConfirmationDeleteModal
                            id={id}
                            url={`/dashboard/album/delete/${id}`}
                            name={nama}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

const NotFound = () => (
    <tbody className="bg-white">
        <tr className="bg-white">
            <td colSpan="5" className="text-center py-4 lg:px-36">
                <div
                    className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                >
                    <div>Data tidak ditemukan!</div>
                </div>
            </td>
        </tr>
    </tbody>
);

const AlbumTable = ({ children }) => {
    return (
        <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                {children}
            </table>
        </div>
    );
};

AlbumTable.Header = Header;
AlbumTable.Body = Body;
AlbumTable.NotFound = NotFound;

export default AlbumTable;

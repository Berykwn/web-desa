import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import ConfirmationDeleteModal from "../Modals/ConfirmationDeleteModal";

const Header = () => (
    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
            <th scope="col" className="px-6 py-3">
                nama
            </th>
            <th scope="col" className="px-6 py-3">
                jabatan
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
);

const Body = ({ id, nama, jabatan }) => {
    const [openModal, setOpenModal] = useState(undefined);

    return (
        <tbody className="bg-white">
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4">
                    {nama}
                </th>
                <td scope="row" className="px-6 py-4">
                    {jabatan}
                </td>
                <td className="px-6 py-4">
                    <div className="flex space-x-1">
                        <Link
                            method="get"
                            data={{ id: id }}
                            // href={route("dashboard.anggota.show")}
                            className="px-3 py-1 text-xs font-medium text-center rounded-lg text-white bg-sky-600 hover:bg-sky-700"
                        >
                            Detail
                        </Link>

                        <Link
                            method="get"
                            data={{ id: id }}
                            // href={route("dashboard.anggota.edit")}
                            className="px-3 py-1 text-xs font-medium text-center rounded-lg text-white bg-green-600 hover:bg-green-600"
                        >
                            Edit
                        </Link>

                        {/* <button
                            onClick={() => setOpenModal(`pup-up${id}`)}
                            className="px-3 py-1 text-xs font-medium text-center rounded-lg text-white bg-red-600 hover:bg-red-600"
                        >
                            Hapus
                        </button>

                        <ConfirmationDeleteModal
                            id={id}
                            url={`/dashboard/anggota/delete/${id}`}
                            name={nama}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        /> */}
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
 
const AnggotaTable = ({ children }) => { 
    return (
        <div className="relative overflow-x-auto mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                {children}
            </table>
        </div>
    );
};

AnggotaTable.Header = Header;
AnggotaTable.Body = Body;
AnggotaTable.NotFound = NotFound;

export default AnggotaTable;

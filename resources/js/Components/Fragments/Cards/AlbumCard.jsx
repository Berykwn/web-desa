import React, { useState, Fragment } from "react";
import DetailModal from "../Modals/DetailModal";

const AlbumCard = ({ id, gambar, nama }) => {
    const [openDetailModal, setOpenDetailModal] = useState(undefined);
    const modalId = `modal-${id}`;
    
    return (
        <React.Fragment>
            <button
                onClick={() => setOpenDetailModal(true)}
                className="transition-transform transform group-hover:scale-105"
            >
                <div className="relative group">
                    <img
                        className="rounded w-56 h-40 "
                        src={`storage/img/albums/${gambar}`}
                        alt={nama}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p>{nama}</p>
                    </div>
                </div>
            </button>

            <DetailModal
                id={modalId}
                title={nama}
                body={gambar}
                openDetailModal={openDetailModal}
                setOpenDetailModal={setOpenDetailModal}
            />
        </React.Fragment>
    );
};

export default AlbumCard;

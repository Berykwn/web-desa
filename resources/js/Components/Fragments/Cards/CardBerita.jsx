import { Link } from "@inertiajs/react";
import React from "react";

const Header = ({ gambar }) => {
    return (
        <>
            <div className="relative flex-shrink-0 h-48 w-full">
                <img
                    className="absolute object-cover h-full w-full rounded-t-md"
                    src={`/storage/img/beritas/${gambar}`}
                    alt={gambar}
                />
            </div>
        </>
    );
}; 

const Body = ({ judul, isi, id }) => {
    const formattedText = isi.length > 100 ? isi.slice(0, 60) + "..." : isi;
    return (
        <>
            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-deep-teal text-gray-800">
                <Link
                    method="GET"
                    data={{ id: id }}
                    href={route("berita.show")}
                >
                    {judul}
                </Link> 
            </h3>
            <p
                className="mt-2 line-clamp-3 text-sm leading-6"
                dangerouslySetInnerHTML={{
                    __html: formattedText,
                }}
            ></p>
        </>
    );
};

const CardBerita = ({ children }) => {
    return (
        <div className="flex max-w-xl flex-col items-start justify-between">
            {children}
        </div>
    );
};

CardBerita.Header = Header;
CardBerita.Body = Body;

export default CardBerita;

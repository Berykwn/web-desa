import { Link } from "@inertiajs/react";
import { TbCalendarEvent } from "react-icons/tb";

const Header = ({ nama }) => {
    return (
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {nama.slice(0, 50)}
        </h5>
    );
};

const Body = ({ isi, tema, tanggal }) => {
    const formattedText = isi.length > 100 ? isi.slice(0, 60) + "..." : isi;
    return (
        <>
            <p
                className="font-normal text-gray-700 mt-2"
                dangerouslySetInnerHTML={{
                    __html: formattedText,
                }}
            ></p>
            <div className="flex gap-1 justify-between mt-3">
                <span className="text-sm mt-1">
                    <div className="flex gap-1">
                        <TbCalendarEvent className="w-6 h-7 text-xl" />
                        <p className="mt-1">{tanggal}</p>
                    </div>
                </span>
                <span className="bg-slate-200 p-2 rounded-lg text-sm item-center">
                    {tema}
                </span>
            </div>
        </>
    );
};

const CardAgenda = ({ children, id }) => {
    return (
        <Link
            data={{ id: id }}
            href={route("agenda.show")}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
            {children}
        </Link>
    );
};

CardAgenda.Header = Header;
CardAgenda.Body = Body;

export default CardAgenda;

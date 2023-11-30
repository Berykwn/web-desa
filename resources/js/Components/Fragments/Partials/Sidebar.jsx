import React from "react";
import { TbNews, TbCalendarEvent, TbAlbum } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "../../Elements/ApplicationLogo";

const Sidebar = ({ sidebarOpen, pages }) => {
    const sidebarMenu = [
        {
            name: "Dashboard",
            url: "dashboard",
            icon: CgMenuGridR,
            label: "Dashboard", 
        },
        {
            name: "Berita",
            url: "dashboard.berita",
            icon: TbNews,
            label: "Berita",
        },
        {
            name: "Agenda",
            url: "dashboard.agenda",
            icon: TbCalendarEvent,
            label: "Agenda",
        },
        {
          name: "Album",
          url: "dashboard.album",
          icon: TbAlbum,
          label: "Album",
        },
        {
          name: "Anggota",
          url: "dashboard.anggota",
          icon: FaUsers,
          label: "Anggota",
        },
    ];

    return (
        <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } sm:translate-x-0`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg">
                <ul className="md:w-full flex-grow">
                    <li className="flex py-4 justify-start gap-1">
                        <ApplicationLogo className="w-1/4 h-1/5" />
                        <span className="px-4 py-2 text-lg font-semibold">
                            Karang Taruna. Adikarto
                        </span>
                    </li>
                </ul>

                {sidebarMenu.map((item, index) => (
                    <Link
                        key={index}
                        method="GET"
                        href={route(item.url)}
                        className={`flex items-center mt-1 px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 ${
                            pages.name === item.label && "bg-stone-100"
                        }`}
                    >
                        <item.icon className="w-6 h-6 text-xl text-gray-500 transition duration-75" />
                        <span className="ml-3 text-lg">{item.label}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

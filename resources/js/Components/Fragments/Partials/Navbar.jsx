import ApplicationLogo from "@/Components/Elements/ApplicationLogo";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";

const Navbar = ({ pages }) => {
    const navLinks = [
        { url: "home", text: "Home" },
        { url: "tentang.desa", text: "Tentang Desa" },
        { url: "agenda", text: "Agenda" },
        { url: "berita", text: "Berita" },
        { url: "album", text: "Album" },
        { url: "home", text: "Perangkat Desa" },
    ];

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="bg-stone-200 border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 px-1">
                    <a href="/" className="flex items-center space-x-3">
                        <ApplicationLogo className="h-12" />
                        <span className="self-center md:text-xl text-sm font-semibold whitespace-nowrap">
                            Karang Taruna Adikarto
                        </span>
                    </a>
                    <div className="flex items-center space-x-6">
                        <a
                            href="tel:5541251234"
                            className="text-sm text-gray-500 hover:underline"
                        >
                            (555) 412-1234
                        </a>

                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                            aria-controls="navbar-default"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <TbMenu2 className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            <nav className="bg-stone-200">
                <div className="max-w-screen-xl flex flex-wrap mx-auto md:px-1">
                    <div
                        className={`w-full md:block ${
                            isMobileMenuOpen ? "block" : "hidden"
                        }`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col  border border-gray-100 bg-gray-50 md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-stone-200">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={route(item.url)}
                                        className={`block px-3 py-1 rounded-md hover:bg-gray-100 ${
                                            pages.name === item.text
                                                ? "bg-amber-300 "
                                                : "bg-transparent"
                                        }`}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

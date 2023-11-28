import { Link } from "@inertiajs/react";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ pages }) => {
    return (
        <>
            <nav className="flex mb-2" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link
                            href={route("dashboard")}
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-400"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <MdKeyboardArrowRight />
                            <Link
                                href={route(pages.url)}
                                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-400 md:ml-2"
                            >
                                {pages.name}
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <MdKeyboardArrowRight />
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                                {pages.title}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;

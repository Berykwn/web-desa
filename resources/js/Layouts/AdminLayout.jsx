import React, { useState, useEffect } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Dropdown } from "flowbite-react";
import Sidebar from "@/Components/Fragments/Partials/Sidebar";
import { Head, Link } from "@inertiajs/react";

const AdminLayout = ({ children, auth, title, pages }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebarOnOutsideClick = (e) => {
        const isSidebarButton = e.target.closest(
            '[data-drawer-target="default-sidebar"]'
        );
        const isClickInsideSidebar = e.target.closest("#default-sidebar");

        if (!isSidebarButton && !isClickInsideSidebar && sidebarOpen) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener("click", closeSidebarOnOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <section>
            <Sidebar sidebarOpen={sidebarOpen} pages={pages} title={title} />
            <Head title={pages.title} />
            <div className="px-10 sm:ml-64 bg-stone-100">
                <nav className="bg-gray-50 border-gray-200">
                    <div className="max-w-screen-xl flex justify-between lg:p-2 md:p-2">
                        <div className="-ml-6">
                            <button
                                onClick={toggleSidebar}
                                data-drawer-target="default-sidebar"
                                data-drawer-toggle="default-sidebar"
                                aria-controls="default-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <TbMenu2 className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 px-3 lg:py-2 mt-2 lg:ml-7 md:ml-7">
                            <Dropdown label={auth.user.name} inline>
                                <Dropdown.Item>
                                    <Link href={route("profile.edit")}>
                                        Profile
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log out
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </nav>

                <div className="container pb-8">
                    <div className="lg:px-4 md:px-4">
                        {children}
                    </div>
                </div>

                <div className="flex justify-center py-4 px-8 mt-8">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023{" "}
                        <a href="/" className="hover:underline">
                            Karang Taruna Adikarto
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AdminLayout;

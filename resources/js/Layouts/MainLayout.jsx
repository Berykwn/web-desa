import ApplicationLogo from "@/Components/Elements/ApplicationLogo";
import Navbar from "@/Components/Fragments/Partials/Navbar";
import { Head } from "@inertiajs/react";

const MainLayout = ({ children, pages }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { text: "Agenda", href: "#" },
        { text: "Album", href: "#" },
        { text: "Berita", href: "#" },
        { text: "Tentang desa", href: "#" },
    ];

    return (
        <div className="bg-stone-200">
            <Head title={pages.title} />

            <Navbar pages={pages} />

            {pages.title !== "Home" && (
                <div className="lg:px-[132px] sm:px-6 px-4 py-2 bg-stone-200">
                    <h4 className="font-semibold text-3xl sm:text-4xl md:text-5xl mt-5">
                        {pages.title}.
                    </h4>
                </div>
            )}

            <main className="bg-stone-200">{children}</main>

            <footer className="bg-slate-50 rounded-lg shadow">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a
                            href="/"
                            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                        >
                            <ApplicationLogo className="h-12" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">
                                Karang Taruna Adikarto
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="hover:underline me-4 md:me-6"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-autolg:my-8" />

                    <span className="block text-sm text-gray-500 sm:text-center">
                        © {currentYear}{" "}
                        <a href="/" className="hover:underline">
                            Karang Taruna Adikarto
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;

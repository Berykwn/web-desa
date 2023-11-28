import React from "react";
import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import BeritaTable from "@/Components/Fragments/Tables/BeritaTable";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import Paginator from "@/Components/Fragments/Paginator";

const Berita = (props) => {
    const { auth, berita, allBerita, pages, flash } = props;

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allBerita,
        berita.data,
        ["judul", "deskripsi", "author"],
        ""
    );

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 py-2">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Berita
                        </h5>
                        <p>
                            Kelola data berita Anda dengan mudah. Anda dapat
                            mencari data sesuai kata kunci yang terdapat dalam
                            tabel, menambahkan berita baru, mengubah data berita
                            yang sesuai, dan menghapus data berita yang tidak
                            relevan!
                        </p>
                        {flash.message && (
                            <div
                                className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50"
                                role="alert"
                            >
                                {flash.message}
                            </div>
                        )}
                        <div className="mt-4">
                            <Link
                                href={route("dashboard.berita.create")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Berita
                            </Link>
                        </div>
                    </div>
                </div>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    pages={pages.name}
                />

                <BeritaTable>
                    <BeritaTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <BeritaTable.Body key={item.id} {...item} />
                        ))
                    ) : (
                        <BeritaTable.NotFound />
                    )}
                </BeritaTable>

                <div className="flex justify-end py-4">
                    <Paginator link={berita.links} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Berita;

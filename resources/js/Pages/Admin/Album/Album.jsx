import SearchInput from "@/Components/Elements/Input/SearchInput";
import Paginator from "@/Components/Fragments/Paginator";
import AlbumTable from "@/Components/Fragments/Tables/AlbumTable";
import useSearch from "@/Hooks/useSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const Album = (props) => {
    const { auth, album, allAlbum, pages, flash } = props;

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allAlbum,
        album.data,
        ["nama"],
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
                                href={route("dashboard.album.create")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Album
                            </Link>
                        </div>
                    </div>
                </div>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    pages={pages.name}
                />

                <AlbumTable>
                    <AlbumTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <AlbumTable.Body key={item.id} {...item} />
                        ))
                    ) : (
                        <AlbumTable.NotFound />
                    )}
                </AlbumTable>

                <div className="flex justify-end py-4">
                    <Paginator link={album.links} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Album;

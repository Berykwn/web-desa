import SearchInput from "@/Components/Elements/Input/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import AgendaTable from "@/Components/Fragments/Tables/AgendaTable";
import React from "react";
import Paginator from "@/Components/Fragments/Paginator";
import useSearch from "@/Hooks/useSearch";
import { Link } from "@inertiajs/react";

const Agenda = (props) => {
    const { auth, agenda, allAgenda, pages, flash } = props;
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allAgenda,
        agenda.data,
        ["nama", "author"],
        ""
    );
    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 py-2">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Agenda
                        </h5>
                        Kelola data berita anda bisa mencari data sesuai keyword
                        yang ada pada tabel, menambah data berita baru, mengubah
                        data berita yang sesuai, dan menghapus data berita yang
                        tidak relevan!

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
                                href={route("dashboard.agenda.create")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Agenda
                            </Link>
                        </div>
                    </div>
                </div>


                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    pages={pages.name} 
                />

                <AgendaTable>
                    <AgendaTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <AgendaTable.Body key={item.id} {...item} />
                        ))
                    ) : (
                        <AgendaTable.NotFound />
                    )}
                </AgendaTable>

                <div className="flex justify-end py-4">
                    <Paginator link={agenda.links} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Agenda;

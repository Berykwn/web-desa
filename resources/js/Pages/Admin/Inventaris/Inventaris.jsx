import SearchInput from "@/Components/Elements/Input/SearchInput";
import Paginator from "@/Components/Fragments/Paginator";
import BarangKeluarTable from "@/Components/Fragments/Tables/BarangKeluarTable";
import BarangMasukTable from "@/Components/Fragments/Tables/BarangMasukTable";
import useSearch from "@/Hooks/useSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const Inventaris = (props) => {
    const { auth, allBarangMasuk, barangMasuk, allBarangKeluar, barangKeluar, allBarang, pages, flash } = props;
    const [activeTab, setActiveTab] = useState("barang-masuk")

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        activeTab === 'barang-masuk' ? allBarangMasuk : allBarangKeluar,
        activeTab === 'barang-masuk' ? barangMasuk.data : barangKeluar.data,
        [],
        "",
        ["barang.nama_barang"]
    );

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 py-2">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Inventaris
                        </h5>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, itaque?

                        {flash.message && (
                            <div
                                className="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50"
                                role="alert"
                            >
                                {flash.message}
                            </div>
                        )}

                        <div className="mt-4 flex gap-4">
                            <button onClick={() => setActiveTab('barang-masuk')} className={`px-4 py-1.5 ${activeTab === 'barang-masuk' && 'border-b border-gray-500'}`}>
                                Barang Masuk
                            </button>
                            <button onClick={() => setActiveTab('barang-keluar')} className={`px-4 py-1.5 ${activeTab === 'barang-keluar' && 'border-b border-gray-500'}`}>
                                Barang Keluar
                            </button>
                        </div>
                    </div>
                </div>

                {activeTab === 'barang-masuk' && (
                    <>
                        <div className="mb-6">
                            <Link
                                href={route("dashboard.inventaris.create.barang.masuk")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Barang Masuk
                            </Link>
                        </div>

                        <SearchInput
                            keyword={searchKeyword}
                            onChange={handleSearchInputChange}
                            pages={pages.name}
                        />

                        <BarangMasukTable>
                            <BarangMasukTable.Header />
                            {filteredData.length ? (
                                filteredData.map((item) => (
                                    <BarangMasukTable.Body key={item.id} {...item} />
                                ))
                            ) : (
                                <BarangMasukTable.NotFound />
                            )}
                        </BarangMasukTable>

                        <div className="flex justify-end py-4">
                            <Paginator link={barangMasuk.links} />
                        </div>
                    </>
                )}

                {activeTab === 'barang-keluar' && (
                    <>
                        <div className="mb-6">
                            <Link
                                href={route("dashboard.inventaris.create.barang.keluar")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Barang Keluar
                            </Link>
                        </div>

                        <SearchInput
                            keyword={searchKeyword}
                            onChange={handleSearchInputChange}
                            pages={pages.name}
                        />

                        <BarangKeluarTable>
                            <BarangKeluarTable.Header />
                            {filteredData.length ? (
                                filteredData.map((item) => (
                                    <BarangKeluarTable.Body key={item.id} {...item} />
                                ))
                            ) : (
                                <BarangKeluarTable.NotFound />
                            )}
                        </BarangKeluarTable>

                        <div className="flex justify-end py-4">
                            <Paginator link={barangKeluar.links} />
                        </div>
                    </>
                )}
            </section>
        </AdminLayout>
    );
};

export default Inventaris;

import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import Paginator from "@/Components/Fragments/Paginator";
import BarangTable from "@/Components/Fragments/Tables/BarangTable";

const Barang = (props) => {
    const { auth, barang, allBarang, pages, flash } = props;

    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allBarang,
        barang.data,
        ["nama_barang", "kode_barang", "jenis_barang"],
        ""
    );

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 py-2">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Barang Inventaris
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, corporis?
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
                                href={route("dashboard.barang.create")}
                                className="px-2 py-2 text-xs font-medium text-white rounded-md bg-sky-600 hover:bg-sky-800"
                            >
                                Tambah Barang
                            </Link>
                        </div>
                    </div>
                </div>

                <SearchInput
                    keyword={searchKeyword}
                    onChange={handleSearchInputChange}
                    pages={pages.name}
                />

                <BarangTable>
                    <BarangTable.Header />
                    {filteredData.length ? (
                        filteredData.map((item) => (
                            <BarangTable.Body key={item.id} {...item} />
                        ))
                    ) : (
                        <BarangTable.NotFound />
                    )}
                </BarangTable>

                <div className="flex justify-end py-4">
                    <Paginator link={barang.links} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Barang;

import useSearch from "@/Hooks/useSearch";
import SearchInput from "@/Components/Elements/Input/SearchInput";
import CardBerita from "@/Components/Fragments/Cards/CardBerita";
import Paginator from "@/Components/Fragments/Paginator";
import MainLayout from "@/Layouts/MainLayout";
import NotFoundAlert from "@/Components/Elements/NotFoundAlert";

const Berita = ({ berita, allBerita, pages }) => {
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allBerita,
        berita.data,
        ["judul", "author"],
        ""
    );
 
    return (
        <MainLayout pages={pages}>
            <section className="px-4 sm:px-6 lg:px-[132px] mb-8 mt-2">
                <div className="lg:w-1/2 mb-4">
                    <SearchInput
                        keyword={searchKeyword}
                        onChange={handleSearchInputChange}
                        pages={pages.name}
                    />
                </div>

                {filteredData.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredData.map((item) => (
                            <CardBerita key={item.id}>
                                <CardBerita.Header gambar={item.gambar} />
                                <CardBerita.Body
                                    id={item.id}
                                    isi={item.isi}
                                    judul={item.judul}
                                />
                            </CardBerita>
                        ))}
                    </div>
                ) : (
                    <NotFoundAlert>Data berita tidak ditemukan!</NotFoundAlert>
                )}

                <div className="flex justify-center py-8">
                    <Paginator link={berita.links} />
                </div>
            </section>
        </MainLayout>
    );
};

export default Berita;

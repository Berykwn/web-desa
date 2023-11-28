import SearchInput from "@/Components/Elements/Input/SearchInput";
import NotFoundAlert from "@/Components/Elements/NotFoundAlert";
import CardAgenda from "@/Components/Fragments/Cards/CardAgenda";
import Paginator from "@/Components/Fragments/Paginator";
import useSearch from "@/Hooks/useSearch";
import MainLayout from "@/Layouts/MainLayout";

const Agenda = ({ agenda, allAgenda, pages }) => {
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allAgenda,
        agenda.data,
        ["nama", "author", "tema", "tanggal"],
        ""
    );
    return ( 
        <MainLayout pages={pages}>
            <section className="px-4 sm:px-6 lg:px-32 mb-8 mt-2">
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
                            <CardAgenda key={item.id} id={item.id}>
                                <CardAgenda.Header nama={item.nama} />
                                <CardAgenda.Body
                                    isi={item.isi}
                                    tema={item.tema}
                                    tanggal={item.tanggal}
                                />
                            </CardAgenda>
                        ))}
                    </div>
                ) : (
                    <NotFoundAlert>Data agenda tidak ditemukan!</NotFoundAlert>
                )}

                <div className="flex justify-center py-8">
                    <Paginator link={agenda.links} />
                </div>
            </section>
        </MainLayout>
    );
};

export default Agenda;

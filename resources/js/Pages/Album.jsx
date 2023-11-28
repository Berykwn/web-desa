import NotFoundAlert from "@/Components/Elements/NotFoundAlert";
import AlbumCard from "@/Components/Fragments/Cards/AlbumCard";
import Paginator from "@/Components/Fragments/Paginator";
import MainLayout from "@/Layouts/MainLayout";

const Album = ({ pages, album }) => {
    return (
        <MainLayout pages={pages}>
            <section className="px-4 sm:px-6 lg:px-32 mb-8 mt-2">
                {album.data.length ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {album.data.map((item) => (
                            <div key={item.id}>
                                <AlbumCard {...item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <NotFoundAlert>Data album tidak ditemukan!</NotFoundAlert>
                )}

                <div className="flex justify-center py-8">
                    <Paginator link={album.links} />
                </div>
            </section>
        </MainLayout>
    );
};

export default Album;

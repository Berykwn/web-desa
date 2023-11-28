import MainLayout from "@/Layouts/MainLayout";
import useFormattedHtmlContent from "@/Hooks/useFormattedHtmlContent";
import useFormattedDate from "@/Hooks/useFormattedDate";

const DetailBerita = ({ pages, berita }) => {
    const formattedHtmlContent = useFormattedHtmlContent(berita.isi);
    const formattedUpdatedAt = useFormattedDate(berita.updated_at);

    return (
        <MainLayout pages={pages}>
            <section className="container px-4 sm:px-6 lg:px-32 mb-8 mt-2">
                <div className="flex flex-wrap items-center gap-2 py-2">
                    <span className="text-sm bg-slate-100 px-2 rounded-lg mb-2 sm:mb-0">
                        {berita.author}
                    </span>
                    <span className="text-sm">{formattedUpdatedAt}</span>
                </div>

                <h1 className="block mt-1 text-xl leading-tight font-medium text-black">
                    {berita.judul}
                </h1>
                
                <img
                    className="md:w-1/2 w-full max-w-600 max-h-600 rounded-lg object-cover animate-fade-in cursor-pointer lg:max-w-none"
                    src={`/storage/img/beritas/${berita.gambar}`}
                />

                <div
                    className="py-3"
                    dangerouslySetInnerHTML={{
                        __html: formattedHtmlContent,
                    }}
                />
            </section>
        </MainLayout>
    );
};

export default DetailBerita;

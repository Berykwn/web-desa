import useFormattedHtmlContent from "@/Hooks/useFormattedHtmlContent";
import MainLayout from "@/Layouts/MainLayout";

const DetailAgenda = ({ agenda, pages }) => {
    const formattedHtmlContent = useFormattedHtmlContent(agenda.isi);

    return (
        <MainLayout pages={pages}>
            <section className="container px-4 sm:px-6 lg:px-32 mb-8 mt-2">
                <div className="flex flex-wrap items-center gap-2 py-2">
                    <span className="text-sm bg-slate-100 px-2 rounded-lg mb-2 sm:mb-0">
                        {agenda.tema}
                    </span>
                    <span className="text-sm">Tanggal : {agenda.tanggal}</span>
                </div>

                <h1 className="block mt-1 text-xl leading-tight font-medium text-black">
                    {agenda.nama}
                </h1>

                <div
                    className="py-3"
                    dangerouslySetInnerHTML={{
                        __html: formattedHtmlContent,
                    }}
                />

                <h5 className="block mt-2 text-lg leading-tight font-medium text-black">
                    Penulis : {agenda.author}
                </h5>
            </section>
        </MainLayout>
    );
};

export default DetailAgenda;

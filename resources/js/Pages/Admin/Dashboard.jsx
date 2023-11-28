import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ auth, pages, title }) {
    return (
        <AdminLayout auth={auth} pages={pages} title={title}>
            <section className="bg-white rounded-md shadow-md px-6 py-2">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <h5 className="text-1xl md:text-2xl font-semibold mb-2">
                        Dashboard
                    </h5>
                    
                </div>
                
            </section>
        </AdminLayout>
    );
}

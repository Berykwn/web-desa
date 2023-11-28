import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import Button from "@/Components/Elements/Button";
import { Link, router } from "@inertiajs/react";
import InputError from "@/Components/Elements/Input/InputError";

const TambahAgenda = ({ pages, auth, errors }) => {
    const [formValues, setFormValues] = useState({
        nama: "",
        tema: "",
        isi: "",
        tanggal: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", formValues.nama);
        formData.append("tema", formValues.tema);
        formData.append("isi", formValues.isi);
        formData.append("tanggal", formValues.tanggal);
        formData.append("author", auth.user.name);

        router.post("/dashboard/agenda/store", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleQuillChange = (value) => {
        setFormValues((prevValues) => ({ ...prevValues, isi: value }));
    };

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 pt-2 pb-4">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Tambah berita
                        </h5>
                        Kelola data berita anda bisa mencari data sesuai keyword
                        yang ada pada tabel, menambah data berita baru, mengubah
                        data berita yang sesuai, dan menghapus data berita yang
                        tidak relevan!
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel htmlFor="nama" value="Nama" />
                        <TextInput
                            id="nama"
                            type="text"
                            name="nama"
                            value={formValues.nama}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.nama && <InputError message={errors.nama} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="tema" value="Tema" />
                        <TextInput
                            id="tema"
                            type="text"
                            name="tema"
                            value={formValues.tema}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.tema && <InputError message={errors.tema} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="tanggal" value="Tanggal" />
                        <TextInput
                            id="tanggal"
                            type="date"
                            name="tanggal"
                            value={formValues.tanggal}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.tanggal && (
                            <InputError message={errors.tanggal} />
                        )}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="isi" value="Isi" />
                        <ReactQuill
                            style={{ backgroundColor: "white" }}
                            value={formValues.isi}
                            onChange={handleQuillChange}
                        />
                        {errors.isi && <InputError message={errors.isi} />}
                    </div>

                    <div className="flex gap-1">
                        <Button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700"
                        >
                            Submit
                        </Button>

                        <Link
                            href={route("dashboard.agenda")}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white bg-slate-600 hover:bg-slate-700 tracking-widest transition ease-in-out duration-150"
                        >
                            Kembali
                        </Link>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
};

export default TambahAgenda;

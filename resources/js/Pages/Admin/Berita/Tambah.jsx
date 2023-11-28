import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import Button from "@/Components/Elements/Button";
import { Link, router } from "@inertiajs/react";
import InputError from "@/Components/Elements/Input/InputError";

const TambahBerita = ({ pages, auth, errors }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
 
    const [formValues, setFormValues] = useState({
        judul: "",
        deskripsi: "",
        isi: "",
        gambar: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("judul", formValues.judul);
        formData.append("deskripsi", formValues.deskripsi);
        formData.append("isi", formValues.isi);
        formData.append("gambar", selectedImage);
        formData.append("author", auth.user.name);

        router.post("/dashboard/berita/store", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleQuillChange = (value) => {
        setFormValues((prevValues) => ({ ...prevValues, isi: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        setImageUrl(URL.createObjectURL(file));
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
                        <InputLabel htmlFor="judul" value="Judul" />
                        <TextInput
                            id="judul"
                            type="text"
                            name="judul"
                            value={formValues.judul}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.judul && <InputError message={errors.judul} />}
                    </div>
                    <div className="mb-4">
                        <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                        <TextInput
                            id="deskripsi"
                            type="text"
                            name="deskripsi"
                            value={formValues.deskripsi}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.deskripsi && (
                            <InputError message={errors.deskripsi} />
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

                    <div className="mb-4">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Selected"
                                className="object-cover w-1/2 h-1/2 rounded-md mb-2"
                            />
                        )}

                        <TextInput
                            type="file"
                            onChange={handleImageChange}
                            className="mt-1 block lg:w-1/3 text-sm text-gray-900 rounded-lg cursor-pointer focus:outline-none"
                        />

                        {errors.gambar && (
                            <InputError message={errors.gambar} />
                        )}

                        <div className="mt-1 text-sm text-gray-500">
                            Pilihlah gambar yang menarik untuk halaman depan
                            berita
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <Button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700"
                        >
                            Submit
                        </Button>

                        <Link
                            href={route('dashboard.berita')}
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

export default TambahBerita;

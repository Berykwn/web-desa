import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import Button from "@/Components/Elements/Button";
import { Link, router } from "@inertiajs/react";
import InputError from "@/Components/Elements/Input/InputError";

const TambahAlbum = ({ pages, auth, errors }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
 
    const [formValues, setFormValues] = useState({
        nama: "",
        gambar: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", formValues.nama);
        formData.append("gambar", selectedImage);

        router.post("/dashboard/album/store", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
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
                            Tambah album
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
                            href={route('dashboard.agenda')}
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

export default TambahAlbum;

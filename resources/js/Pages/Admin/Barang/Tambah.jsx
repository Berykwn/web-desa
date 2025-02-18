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
        nama_barang: "",
        kode_barang: "",
        jenis_barang: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_barang", formValues.nama_barang);
        formData.append("kode_barang", formValues.kode_barang);
        formData.append("jenis_barang", formValues.jenis_barang);

        router.post("/dashboard/barang/store", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <AdminLayout pages={pages} auth={auth}>
            <section className="bg-white rounded-md shadow-md px-6 pt-2 pb-4">
                <div className="lg:w-3/4 text-sm text-gray-800 my-4">
                    <div className="pb-2">
                        <h5 className="text-2xl md:text-4xl font-semibold mb-2">
                            Tambah barang
                        </h5>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, tempore!
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel htmlFor="nama_barang" value="Nama Barang" />
                        <TextInput
                            id="nama_barang"
                            type="text"
                            name="nama_barang"
                            value={formValues.nama_barang}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.nama_barang && <InputError message={errors.nama_barang} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="kode_barang" value="Kode Barang" />
                        <TextInput
                            id="kode_barang"
                            type="text"
                            name="kode_barang"
                            value={formValues.kode_barang}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.kode_barang && <InputError message={errors.kode_barang} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="jenis_barang" value="Jenis Barang" />
                        <TextInput
                            id="jenis_barang"
                            type="text"
                            name="jenis_barang"
                            value={formValues.jenis_barang}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.jenis_barang && <InputError message={errors.jenis_barang} />}
                    </div>

                    <div className="flex gap-1">
                        <Button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700"
                        >
                            Submit
                        </Button>

                        <Link
                            href={route("dashboard.barang")}
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

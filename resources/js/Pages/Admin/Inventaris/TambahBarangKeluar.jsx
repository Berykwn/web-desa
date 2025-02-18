import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";
import Button from "@/Components/Elements/Button";
import { Link, router } from "@inertiajs/react";
import InputError from "@/Components/Elements/Input/InputError";

const TambahBarangKeluar = ({ pages, auth, errors, allBarang }) => {
    const [formValues, setFormValues] = useState({
        barang_id: "",
        jumlah_keluar: "",
        keterangan: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("barang_id", formValues.barang_id);
        formData.append("jumlah_keluar", formValues.jumlah_keluar);
        formData.append("keterangan", formValues.keterangan);

        router.post("/dashboard/inventaris/store/barangKeluar", formData);
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
                            Tambah Barang Keluar
                        </h5>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, tempore!
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputLabel htmlFor="nama_barang" value="Nama Barang" />
                        <select
                            id="barang_id"
                            name="barang_id"
                            value={formValues.barang_id}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">-- Pilih Barang --</option>
                            {allBarang.map((barang) => (
                                <option key={barang.id} value={barang.id}>
                                    {`${barang.kode_barang} - ${barang.nama_barang}`}
                                </option>
                            ))}
                        </select>
                        {errors.barang_id && <InputError message={errors.barang_id} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="jumlah_keluar" value="Jumlah Keluar" />
                        <TextInput
                            id="jumlah_keluar"
                            type="text"
                            name="jumlah_keluar"
                            value={formValues.jumlah_keluar}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.jumlah_keluar && <InputError message={errors.jumlah_keluar} />}
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="keterangan" value="Keterangan" />
                        <TextInput
                            id="keterangan"
                            type="text"
                            name="keterangan"
                            value={formValues.keterangan}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.keterangan && <InputError message={errors.keterangan} />}
                    </div>

                    <div className="flex gap-1">
                        <Button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700"
                        >
                            Submit
                        </Button>

                        <Link
                            href={route("dashboard.inventaris")}
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

export default TambahBarangKeluar;

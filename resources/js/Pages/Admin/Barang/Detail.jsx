import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Detail = (props) => {
    const { auth, pages, barang } = props;

    return (
        <AdminLayout auth={auth} pages={pages}>
            {barang.nama_barang}
        </AdminLayout>
    );
};

export default Detail;

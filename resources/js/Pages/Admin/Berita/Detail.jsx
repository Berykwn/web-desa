import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Detail = (props) => {
    const { auth, pages, berita } = props;
    return (
        <AdminLayout auth={auth} pages={pages}>
            {berita.judul}
        </AdminLayout>
    );
};

export default Detail;

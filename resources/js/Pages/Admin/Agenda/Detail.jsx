import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Detail = (props) => {
    const { auth, pages, agenda } = props;
    return (
        <AdminLayout auth={auth} pages={pages}>
            {agenda.nama}
        </AdminLayout>
    );
};

export default Detail;

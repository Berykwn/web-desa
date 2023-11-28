import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Edit({ auth, mustVerifyEmail, status, pages }) {
    return (
        <AdminLayout auth={auth} pages={pages}>
            <section className="bg-white rounded-md shadow-md px-6 py-4">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </section>

            <section className="bg-white rounded-md shadow-md px-6 py-4 mt-4">
                <UpdatePasswordForm className="max-w-xl" />
            </section>

            <section className="bg-white rounded-md shadow-md px-6 py-4 mt-4">
                <DeleteUserForm className="max-w-xl" />
            </section>
        </AdminLayout>
    );
}

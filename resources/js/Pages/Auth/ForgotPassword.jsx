import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/Elements/Input/InputError";
import TextInput from "@/Components/Elements/Input/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Button from "@/Components/Elements/Button";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div className="flex justify-center items-center">
                <div className="lg:w-1/2 mt-6 px-6 py-4 overflow-hidden">
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <Button
                                className="ml-4 bg-amber-600 hover:bg-amber-700"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

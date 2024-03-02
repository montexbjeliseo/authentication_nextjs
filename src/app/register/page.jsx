'use client';

import Head from "next/head";
import { signUp } from "@/services/auth.service";
import { useState } from "react";


export default function Register() {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = Object.fromEntries(formData);


        signUp(payload).then((response) => {
            if (response.status === 201) {
                console.log("redirect to login")
                // window.location.href = '/login';
                setSuccess("User created successfully, please login");
            } else {
                console.log("Está ocurriendo un error: ", response)
                response.json().then((data) => {
                    setError(data.message);
                })
            }
        }).catch((error) => {
            setError(error.message);
        })

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">

            <Head>
                <title>Register</title>
            </Head>

            <div className="border p-4 w-full max-w-[400px] rounded-xl">
                <h2 className="text-2xl font-semibold mb-3 text-center" >Register</h2>
                <p className="text-red-500">{error}</p>
                <p className="text-green-500">{success}</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-2">
                        Firstname: <input className="text-black p-2 border outline-none focus:border-green-400" type="text" name="firstname" required placeholder="Firstname" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Lastname: <input className="text-black p-2 border outline-none focus:border-green-400" type="text" name="lastname" required placeholder="Lastname" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Email: <input className="text-black p-2 border outline-none focus:border-green-400" type="email" name="email" required placeholder="Email" />
                    </label>
                    <label className="flex flex-col gap-2">
                        City: <input className="text-black p-2 border outline-none focus:border-green-400" type="text" name="city" required placeholder="City" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Password: <input className="text-black p-2 border outline-none focus:border-green-400" type="password" name="password" required placeholder="Password" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Confirm password: <input className="text-black p-2 border outline-none focus:border-green-400" type="password" name="password2" required placeholder="Confirm password" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Profile Image URL: <input className="text-black p-2 border outline-none focus:border-green-400" type="url" name="profileImage" required placeholder="Profile Image URL" />
                    </label>
                    <div className="flex justify-center">
                        <button className="p-2 bg-green-500 rounded-md text-white" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
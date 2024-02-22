'use client';

import { signIn } from "@/services/auth.service";
import { useState } from "react";

export default function Login() {

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = Object.fromEntries(formData);

        console.log(payload);

        signIn(payload).then((response) => {
            if (response.status === 200) {
                setSuccess("User logged in successfully");
                response.json().then((data) => {
                    console.log(data);
                })
            } else {
                setError(response.message);
            }
        }).catch((error) => {
            setError(error.message);
        })
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="p-4 rounded-xl border flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">Login</h2>
                <p className="text-green-500">{success}</p>
                <p className="text-red-500">{error}</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
                    <label className="text-black flex flex-col gap-1">
                        Email:
                        <input type="email" name="email" required placeholder="Email" />
                    </label>

                    <label className="text-black flex flex-col gap-1">
                        Password:
                        <input type="password" name="password" required placeholder="Password" />
                    </label>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
'use client';

import { setAuthState, setToken } from "@/slices/authSlice";
import { useDispatch } from "react-redux";
import { signIn } from "@/services/auth.service";
import { useState } from "react";

export default function LoginForm () {

    const [message, setMessage] = useState(null);

    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = Object.fromEntries(formData);

        signIn(payload).then((response) => {
            if (response.status === 200) {
                // setSuccess("User logged in successfully");
                response.json().then((data) => {
                    console.log(data);

                    dispatch(setAuthState(true));
                    dispatch(setToken(data.token));
                    
                    setMessage("User logged in successfully");

                })
            } else {
                setError("User logged in failed");
            }
        }).catch((error) => {
            setError(error.message);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <label className="text-black flex flex-col gap-1">
                Email:
                <input className="border p-2 outline-none" type="email" name="email" required placeholder="Email" />
            </label>

            <label className="text-black flex flex-col gap-1">
                Password:
                <input className="border p-2 outline-none" type="password" name="password" required placeholder="Password" />
            </label>
            <div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
            </div>
        </form>
    )
}
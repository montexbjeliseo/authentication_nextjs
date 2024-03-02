'use client';

import { ReduxProvider } from "@/redux-provider";
import dynamic from "next/dynamic";

const AuthNavbarLinks = dynamic(() => import("@/components/AuthNavbarLinks"), { ssr: false });

export default function Header() {
    return (
        <ReduxProvider>
            <header className="flex items-center justify-between p-4 w-full">
                <h1 className="text-2xl font-bold">Authentication with Nextjs</h1>
                <nav>
                    <a className="p-4 text-gray-600 font-semibold" href="/">Home</a>
                    <AuthNavbarLinks />
                </nav>
            </header>
        </ReduxProvider>
    );
}
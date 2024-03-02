import { ReduxProvider } from "@/redux-provider";
import { signIn } from "@/services/auth.service";
import dynamic from "next/dynamic";

const LoginFormDynamic = dynamic(() => import("@/components/LoginForm"), { ssr: false });

export default function Login() {
    return (
        <ReduxProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="p-4 rounded-xl border flex flex-col gap-5">
                    <h2 className="text-4xl font-semibold">Login</h2>
                    {/* <p className="text-green-500">{success}</p>
                    <p className="text-red-500">{error}</p> */}
                    <LoginFormDynamic />
                </div>
            </main>
        </ReduxProvider>
    );
}
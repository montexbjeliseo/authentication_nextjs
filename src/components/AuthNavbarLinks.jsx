import { useSelector } from "react-redux";

export default function AuthNavbarLinks() {

    const authState = useSelector((state) => state.auth.authState);

    return (
        <>
            {!authState ? (
                <>
                    <a className="p-4 text-gray-600 font-semibold" href="/login">Login</a>
                    <a className="p-4 text-gray-600 font-semibold" href="/register">Register</a>
                </>
            ) : (
                <>
                    <a className="p-4 text-gray-600 font-semibold" href="/logout">Logout</a>
                    <a className="p-4 text-gray-600 font-semibold" href="/profile">Profile</a>
                </>
            )}
        </>
    )
}
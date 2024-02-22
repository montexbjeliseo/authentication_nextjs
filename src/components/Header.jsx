export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 w-full">
            <h1 className="text-2xl font-bold">Authentication with Nextjs</h1>
            <nav>
                <a className="p-4 text-gray-600 font-semibold" href="/">Home</a>
                <a className="p-4 text-gray-600 font-semibold" href="/login">Login</a>
                <a className="p-4 text-gray-600 font-semibold" href="/register">Register</a>
            </nav>
        </header>
    );
}
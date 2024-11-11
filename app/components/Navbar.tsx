import { HiOutlineBars3 as Bars } from "react-icons/hi2";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full fixed top-0 z-50">
            <nav className="flex items-center justify-between px-10 py-6 relative text-white">
                <button 
                    className="text-4xl" 
                    aria-label="Toggle navigation menu"
                >
                    <Bars />
                </button>

                <Link 
                    href="/" 
                    className="text-3xl font-[family-name:var(--font-family)]"
                >
                    Café Emil
                </Link>
            </nav>
        </header>
    );
}
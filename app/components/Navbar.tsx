import { HiOutlineBars3 as Bars } from "react-icons/hi2";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full">
            <nav className="flex items-center justify-between px-10 py-6 md:justify-center relative text-black">
                <button 
                    className="text-4xl md:absolute md:left-4" 
                    aria-label="Toggle navigation menu"
                >
                    <Bars />
                </button>

                <Link 
                    href="/" 
                    className="text-xl font-[var(--font)]"
                >
                    CAFE EMIL
                </Link>
            </nav>
        </header>
    );
}
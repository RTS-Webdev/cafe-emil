import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-0 top-0 z-50">
      <nav className="flex items-center justify-between px-10 py-6 relative bg-white text-black">
        <Link href="/" className="text-3xl font-playball">
          Café Emil
        </Link>
      </nav>
    </header>
  );
}

'use client'

import Link from "next/link";

export default function Navbar() {
  const handleScroll = (sectionId: string) => {
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <header className="w-full h-0 top-0">
      <nav className="flex items-center justify-between px-10 py-10 relative bg-white text-black">
        <Link href="/" className="text-3xl font-playball">
          Café Emil
        </Link>
        
        <div className="flex gap-2 text-sm md:text-base md:gap-6">
          <a onClick={() => handleScroll('menu')} className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth">
            Menu
          </a>
          <a onClick={() => handleScroll('bordbestilling')} className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth">
            Bordbestilling
          </a>
          <a onClick={() => handleScroll('findus')} className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth">
            Find os
          </a>
        </div>
      </nav>
    </header>
  );
}

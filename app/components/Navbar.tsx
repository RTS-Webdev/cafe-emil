'use client'

import Link from "next/link";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
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
          <a 
            href="#menu" 
            onClick={(e) => handleScroll(e, 'menu')} 
            className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth"
          >
            Menu
          </a>
          <a 
            href="#bordbestilling" 
            onClick={(e) => handleScroll(e, 'bordbestilling')} 
            className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth"
          >
            Bordbestilling
          </a>
          <a 
            href="#findus" 
            onClick={(e) => handleScroll(e, 'findus')} 
            className="hover:text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-600 after:transition-all after:duration-300 scroll-smooth"
          >
            Find os
          </a>
        </div>
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-2 md:p-4 absolute top-0 left-0 w-full font-readable">
      <div className="container mx-auto flex gap-4 justify-center items-center">
        <Link href="#home" className="text-[var(--font-color)] hover:underline hover:decoration-font-secondary hover:decoration-2" >
          Home
        </Link>
        <Link href="#skills" className="text-[var(--font-color)] hover:underline hover:decoration-font-secondary hover:decoration-2" >
          Skills
        </Link>
        <Link href="#myprojects" className="text-[var(--font-color)] hover:underline hover:decoration-font-secondary hover:decoration-2" >
          Projects
        </Link>
        <Link href="/resume.html" target="_blank" className="text-[var(--font-color)] hover:underline hover:decoration-font-secondary hover:decoration-2" >
          Resume
        </Link>
        <Link href="#contact" className="text-[var(--font-color)] hover:underline hover:decoration-font-secondary hover:decoration-2" >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

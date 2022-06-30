import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import '../../index.css'

export default function Navbar() {
  return (
    <div>
      <nav className="px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My site</Link>
          <div className="flex group">
            <NavbarItem text="Home" link="/" />
            <NavbarItem text="Projects" link="/projects" />
            <NavbarItem text="Resume" link="/resume" />
            <NavbarItem text="About" link="/about" />
          </div>
        </div>
      </nav>
    </div>
  );
}
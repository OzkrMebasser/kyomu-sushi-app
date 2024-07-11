import React from "react";
import { FaPhone } from "react-icons/fa6";

import Menu from "./Menu";
import Link from "next/link";
// import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 lg:h-[8.5rem]">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contacto</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center justify-center">
      

        <Link href="/">
          <Image
            className="h-[5.3rem] w-[5.3rem] md:h-24 md:w-24 md:justify-center md:mx-auto lg:justify-center lg:mx-auto lg:h-[9rem] lg:w-[9rem] "
            src="/KYOMUcirclelogo.png"
            alt=""
            width={130}
            height={130}
          />
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden"><Menu /></div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <a
          href="tel:+5216122311107"
          className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md"
        >
          <FaPhone />
          <span> (612) 231-1107</span>
        </a>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        {/* <CartIcon /> */}
      </div>
    </div>
  );
};

export default Navbar;

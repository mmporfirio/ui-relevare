import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#efa63b]"
        smooth
        to="/#about"
      >
        Sobre nós
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#efa63b]"
        smooth
        to="/#services"
      >
        Serviços
      </HashLink>
      {/* <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#efa63b]"
        to="/"
      >
        Portfolio
      </HashLink> */}
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#efa63b]"
        to="/contact#contact"
      >
        Fale conosco
      </HashLink>
      <HashLink
        className="text-white bg-[#efa63b] hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/get-demo#demo"
      >
        Melhorar minha marca
      </HashLink>
    </>
  );
};

export default NavLinks;

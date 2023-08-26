import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import DrawerNav from "./DrawerNav";

const Navbar = ( ) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
   {
      setNavBg("#131313");
      setLinkColor("#1f2937");
    }
  },);


  const handleNav = () => {
    setNav(!nav);
  };

  const checkScrollTop = () => {
    setShadow(window.scrollY >= 90);
  };

  // Preventing memory leak from window
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`${
        shadow ? "shadow-xl" : ""
      } w-full h-20 sticky top-0 duration-200`}
    >
    
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">

        <p className="text-2xl pl-5 font-bold">
         Hazem <span className="text-[#a1a1a1] ">Khaled</span>
        </p>

        {/* desktop menu */}
        <div>
          <div className="flex justify-between items-center text-2xl">
            <ul style={{ color: `${linkColor}` }} className=" pr-5 hidden md:flex">
              <Link href="/">
               <li className="ml-10 font-bold text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
               <li className="ml-10 font-bold text-sm uppercase hover:border-b">About</li>
              </Link>
              <Link href="/#contact">
               <li className="ml-10 font-bold text-sm uppercase hover:border-b">Contact</li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className=" text-white pr-5 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* drawer menu */}
      <DrawerNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;

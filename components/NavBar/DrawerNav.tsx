import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function DrawerNav(props: { nav: any; handleNav: any; }) {
  const { nav, handleNav } = props;

  return (
    <div
      className={
        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dbae7c] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link onClick={handleNav} href="">
              <p className="text-2xl py-8 font-bold">
                <span className="text-[#ffffff] ">Hazem</span>Khaled
              </p>
            </Link>
            <div
              onClick={handleNav}
              className=" scale-125 shadow-[#524141] p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#524141] my-4">
            
          </div>
          <div>
            <ul className="py-4 flex-col">
              <Link href="">
                <li onClick={handleNav} className="py-4 font-bold">
                  {" "}
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className="py-4 font-bold">
                  {" "}
                  About
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className="py-4 font-bold">
                  {" "}
                  Contact
                </li>
              </Link>
            </ul>
            <div className=" pt-40">
              <p className="uppercase  tracking-widest text-[#524141]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w[80%] ">
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/khaled-hazem-711527223/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/KhaledHN">
                    <FaGithub />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://mail.google.com/mail/u/0/#sent?compose=CllgCJqXxhFbpRhxNlVPhLsSwWrlkqhLtXRKFkCtRfxVBnfFHZrnmZNmzdTStkWKskMNjXHPRhg">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerNav;

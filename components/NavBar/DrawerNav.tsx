import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function DrawerNav(props: { nav: any; handleNav: any }) {
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
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link onClick={handleNav} href="">
              <p className="text-2xl text-black py-8 font-bold">
                Hazem <span className="text-[#a1a1a1] ">Khaled</span>
              </p>
            </Link>
            <div
              onClick={handleNav}
              className=" scale-125 text-black shadow-[#524141] p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-[#524141] my-4"></div>
          <div>
            <ul className="py-4 flex-col">
              <Link href="">
                <li onClick={handleNav} className="py-4 text-black font-bold">
                  {" "}
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className="py-4 text-black font-bold">
                  {" "}
                  About
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className="py-4 text-black font-bold">
                  {" "}
                  Contact
                </li>
              </Link>
            </ul>

            <div className=" pt-40">
              <div className="border-b border-[#524141] my-4"></div>

              <div className="flex items-center justify-between my-4 w-full sm:w[80%] ">
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/hazemkhaled">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/hazemkhaled">
                    <FaGithub />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://instagram.com/hazemkhaled">
                    <FaInstagram />
                  </Link>
                </div>
                <div className=" p-3 scale-125 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://facebook.com/hazemkhaled">
                    <FaFacebook />
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

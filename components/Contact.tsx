"use client";
import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbogvy");
  if (state.succeeded) {
    return (
      <div className="pb-5 px-10 flex justify-center">
        <p className="w-[100px] py-3 rounded-md text-white text-center bg-gradient-to-r from-[#989898] to-[#464646]">
          {" "}
          Email sent{" "}
        </p>
      </div>
    );
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-16 pb-5 w-full ">
        <p className="text-xl tracking-widest uppercase text-white ">Contact</p>
        <div className="grid pt-5 lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-white rounded-md p-4 ">
            <div className=" lg:p-3 h-full ">
              <div>
                <Image
                  className=" rounded-md hover:scale-105 ease-in duration-300 "
                  src="/assets/contact-Img.png"
                  alt="Hazem Khaled"
                  width={500}
                  height={350}
                />
              </div>
              <div>
                <h2 className="py-2 text-white">
                  Hazem <span className="text-[#a1a1a1] ">Khaled</span>{" "}
                </h2>
                <p>
                  Consultant, Software Engineer, and Web Developer in Istanbul,
                  Turkey
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Other Social Media</p>
                <div className="flex items-center justify-between py-4">
                  <div className=" text-[#0066C8] p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/hazemkhaled/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className=" text-[#1D9BF0] scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://twitter.com/hazemkhaled">
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className=" text-[#008DD2] scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://github.com/hazemkhaled">
                      <VscGithub />
                    </Link>
                  </div>
                  <div className=" text-[#d62976] scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://instagram.com/hazemkhaled">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className=" text-[#1A77F2] scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://facebook.com/hazemkhaled">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className=" text-red-600 scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://youtube.com/hazemkhaled">
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
                <Link
                  className=" text-white underline font-bold"
                  href="https://archive.hazemkhaled.com"
                >
                  <p>
                    {" "}
                    <span className=" text-[#a1a1a1] ">
                      Archive blog (عربي)
                    </span>{" "}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-sm shadow-white rounded-md lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <p className="font-bold pb-5 text-xl">
                    Send Email or{" "}
                    <Link
                      className="underline"
                      href="https://calendly.com/hazem-khaled/me?back=1"
                    >
                      <span className=" text-[#a1a1a1] ">
                        Schedule an appointment
                      </span>{" "}
                    </Link>{" "}
                  </p>
                  <div className="flex flex-col">
                    <label className=" text-white uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 text-black rounded-lg p-3 flex border-[#989898]"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>

                  <ValidationError
                    prefix="Named"
                    field="name"
                    errors={state.errors}
                  />

                  <div className="text-white flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 text-black rounded-lg p-3 flex border-[#989898] "
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <div className="text-white flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 text-black rounded-lg p-3 border-[#989898] "
                      rows={10}
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="w-full p-4 text-center text-white rounded-md mt-4 bg-gradient-to-r from-[#989898] to-[#464646] ">
                    <button type="submit" disabled={state.submitting}>
                      <div className="w-full">Send Message</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-12">
          <div>
            <p>2023 © Hazem Khaled </p>
          </div>

          <Link href="/">
            <div className=" scale-200 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className=" h-5 w-5 text-white"
                scale={30}
              />
            </div>
          </Link>
          <div className=" items-end">
            <p>
              Developed by{" "}
              <Link href="https://khaledhazem.vercel.app">
                {" "}
                <span className="underline text-white">
                  <span className="text-[#a1a1a1] ">Khaled Hazem</span>{" "}
                </span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

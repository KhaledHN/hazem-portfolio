import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbogvy");
  if (state.succeeded) {
    return (
      <div className="pb-5 px-10 flex justify-center">
        <p className="w-[100px] py-3 rounded-md text-white text-center bg-gradient-to-r from-[#917355] to-[#524141]">
          {" "}
          Email sent{" "}
        </p>
      </div>
    );
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#524141] ">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-[#524141] rounded-md p-4 ">
            <div className=" lg:p-3 h-full ">
              <div>
                <Image
                  className=" rounded-md hover:scale-105 ease-in duration-300 "
                  src="/assets/contactPic.png"
                  alt="/"
                  width={500}
                  height={350}
                />
              </div>
              <div>
                <h2 className="py-2">Hazem Khaled</h2>
                <p>
                Consultant, Software Engineer, and Web Developer in Istanbul, Turkey
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Other Social Media</p>
                <div className="flex items-center justify-between py-4">
                  <div className=" p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/hazemkhaled/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://twitter.com/hazemkhaled">
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://github.com/hazemkhaled">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://instagram.com/hazemkhaled">
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://facebook.com/hazemkhaled">
                      <FaFacebook />
                    </Link>
                  </div>
                  <div className="scale-125 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://youtube.com/hazemkhaled">
                      <FaYoutube />
                    </Link>
                  </div>
                </div>
                <Link  className="underline" href="https://hazemkhaled.com">
                  <p>Archive blog (Arabic) </p>
                </Link>
              </div>
            </div>
          </div>

          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-[#524141] rounded-md lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <p className="font-bold pb-5 text-xl">Send Email or <Link className="underline" href="https://calendly.com/hazem-khaled/me?back=1"> Schedule an appointment</Link> </p> 
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-[#524141]"
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

                  <div className=" flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-[#524141] "
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

                  <div className=" flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-[#524141] "
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
                  <div className="w-full p-4 text-center text-white rounded-md mt-4 bg-gradient-to-r from-[#917355] to-[#524141] ">
                    <button type="submit" disabled={state.submitting}>
                      <div className="w-full">
                              Send Message    
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full scale-200 shadow-lg shadow-[#524141] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className=" h-5 w-5 text-[#524141]"
                scale={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white md:h-screen p-2 flex items-center pt-20 pb-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-xl font-bold tracking-widest pb-5 text-[#524141]">
            About
          </h2>
          {/* <p className="py-2 text-gray-600">
            I have always had a knack for technology and working with computers.
            In 2019 I started working with c# to make small games on Unity, then
            I started working with HTML & CSS to make some minor edits on a
            small website that I was operating. What thought was just a few
            small edits turned into love for programming.
          </p> */}
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I now I started
            freelancing for e-commerce companies on shopify platform. I am now
            spending my time building projects with REACT JS, NEXT JS, and
            learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline curser-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#524141] rounded-xl flex item-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/aboutImg.jpg"
            alt="a picture of me"
            width={450}
            height={316}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

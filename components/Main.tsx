import Link from "next/link";
import Navbar from "@/components/NavBar";

const Main = () => {
  return (
    <div id="home" className="w-full md:h-screen text-center  ">
      <Navbar />
      <div className="max-w-[1240px] pb-20 w-full h-full mx-auto flex justify-center items-center ">
        <div className="pt-10">
          <h1 className=" pb-4">
            Hazem <span className="text-[#a1a1a1] ">Khaled</span>
          </h1>
          <p className="py-4 max-w-[70%] font-bold m-auto">
            Are you trying to turn your good idea into a real product in the
            shortest time to market? Are you struggling to turn your POC into a
            scalable product? Check my consultancy services{" "}
            <Link className="underline" href="/#contact">
              below!
            </Link>{" "}
            <br />
            <br />
            This is precisely what I&apos;m doing for 20 years of software
            development. Helping startups build a cost-efficient, market-ready
            POC that scales with the slightest technical compromises versus
            time-to-market while keeping scalability factors on the table.
            <br />
            <br />
            I&apos;m also here to help companies that need to resolve scaling
            bottlenecks by re-architecting your solution and helping your team
            in refactoring, restructuring, and replacement decisions.
            <br />
            <br />
            We can work together on product software architecture, select the
            right cloud solutions, design and apply the most optimized software
            process, select the software vendor or interview your hiring
            candidates, and write technical RFPs.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] pb-20 w-full h-full mx-auto flex justify-center items-center ">
        <div className="pt-10">
          <h2 className="pb-4">Projects</h2>
          <p className="py-4 max-w-[70%] font-bold m-auto">
            Here are some of my latest projects.
          </p>
          <ul className="list-disc list-inside">
            <li>Project 1: Description of project 1.</li>
            <li>Project 2: Description of project 2.</li>
            <li>Project 3: Description of project 3.</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] pb-20 w-full h-full mx-auto flex justify-center items-center ">
        <div className="pt-10">
          <h2 className="pb-4">Testimonials</h2>
          <p className="py-4 max-w-[70%] font-bold m-auto">
            Here are some testimonials from my clients.
          </p>
          <ul className="list-disc list-inside">
            <li>Client 1: Testimonial from client 1.</li>
            <li>Client 2: Testimonial from client 2.</li>
            <li>Client 3: Testimonial from client 3.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

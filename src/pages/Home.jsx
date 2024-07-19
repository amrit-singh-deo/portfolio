import React from "react";
import profile from "/kitty.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FiDownload } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const job = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("#downBtn", {
      y: 50,
      duration: 0.4,
      opacity: 0,
      delay: 0.8,
    });
  });

  useEffect(() => {
    const typed1 = new Typed(job.current, {
      strings: [
        "React Js Developer",
        "Designer",
        "Frontend Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <div className="w-full lg:h-[calc(100vh-80px)] md:h-[calc(100dvh-80px)] h-[calc(100dvh-64px)]">
      <div className="flex lg:flex-row flex-col-reverse lg:w-4/5 w-[90%] mx-auto h-full items-center lg:gap-10 gap-4 justify-center lg:py-16 py-2 md:justify-end md:py-2">
        <div className="lg:w-3/5 w-full flex flex-col items-start justify-around sm:justify-between lg:h-full h-3/5 md:h-3/4 py-0 md:py-10 lg:py-0">
          <div className="font-semibold sm:text-xl text-lg">
            <span ref={job}></span>
          </div>
          <div>
            <h1 className="lg:text-6xl md:text-5xl text-4xl -ml-1 font-bold">
              Hello I'm
            </h1>
            <h1 className="lg:text-6xl md:text-5xl text-4xl -ml-1 font-bold text-teal-500">
              Kitty Script
            </h1>
          </div>
          <p className="text-sm lg:text-base md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            perspiciatis a consequuntur corrupti necessitatibus obcaecati
            officia reprehenderit placeat, est distinctio, asperiores rerum
            laudantium dolorem deleniti.
          </p>
          <div id="downBtn">
            <button className="font-medium bg-slate-200 px-5 py-3 rounded-lg hover:bg-teal-500 hover:text-white transition duration-200 flex items-center justify-center text-sm sm:text-base">
              Download CV
              <FiDownload className="ml-2" />
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 lg:h-full md:w-3/5 w-4/5 flex items-center justify-end">
          <img
            className="w-full aspect-square object-cover rounded-full"
            src={profile}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

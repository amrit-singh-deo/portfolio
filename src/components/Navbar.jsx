import React, { useRef, useState } from "react";
import Menu from "./Menu";
import { Divide as Hamburger } from "hamburger-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = useRef();

  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP();
  const menuToggle = contextSafe((toggle) => {
    if (toggle) {
      gsap.to("#navBar", {
        xPercent: -100,
        duration: 0.4,
        ease: "none",
      });
      gsap.from(".menu", {
        y: -50,
        duration: 0.1,
        opacity: 0,
        stagger: 0.15,
      });
    } else {
      gsap.to("#navBar", {
        xPercent: 20,
        duration: 0.4,
        ease: "none",
      });
    }
  });

  useGSAP(() => {
    gsap.from("#logo", {
      x: -50,
      duration: 0.4,
      opacity: 0,
      delay: 0.8,
    });

    gsap.from(".burger", {
      x: 50,
      duration: 0.4,
      opacity: 0,
      delay: 0.8,
    });
  });

  useGSAP(
    () => {
      gsap.from(".menu", {
        y: -50,
        duration: 0.2,
        opacity: 0,
        stagger: 0.2,
        delay: 0.8,
      });
    },
    { scope: container }
  );

  return (
    <nav className="w-full lg:h-20 h-16 flex items-center justify-center relative md:h-24">
      <div className="flex items-center justify-between lg:w-4/5 w-[90%] h-full">
        <div id="logo" className="font-bold lg:text-3xl text-2xl md:text-4xl">
          <span>
            Kitty
            <span className="text-teal-500">.</span>
          </span>
        </div>
        <div className="flex items-center justify-between h-full">
          <div className="hidden lg:flex" ref={container}>
            <Menu />
          </div>
          <div className="lg:hidden burger z-20">
            <Hamburger
              onToggle={menuToggle}
              toggled={isOpen}
              toggle={setIsOpen}
              size={25}
              rounded
            />
          </div>
        </div>
        <div
          id="navBar"
          className="items-center lg:hidden flex absolute top-0 left-0 w-screen h-[100dvh] z-10 justify-center translate-x-[100%] backdrop-blur-sm bg-white/50"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

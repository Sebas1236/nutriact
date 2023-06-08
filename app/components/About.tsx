"use client";
import { about } from "../utils/data";
import { useRef } from "react";
// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const About = () => {
  const divRef = useRef(null);
  const subtitle1Ref = useRef(null);
  const subtitle2Ref = useRef(null);
  const isInView = useInView(divRef);
  const isInViewSubtitle1 = useInView(subtitle1Ref);
  const isInViewSubtitle2 = useInView(subtitle2Ref);

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;
  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <motion.div
          className="section-title-group justify-start"
          ref={divRef}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image src={icon} alt="about-image" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </motion.div>
        <motion.p
          className="md:text-body-md mb-12"
          ref={subtitle1Ref}
          style={{
            transform: isInViewSubtitle1 ? "none" : "translateY(100px)",
            opacity: isInViewSubtitle1 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {subtitle1}
        </motion.p>
        <motion.p
          className="md:text-body-md mb-8"
          ref={subtitle2Ref}
          style={{
            transform: isInViewSubtitle2 ? "none" : "translateY(200px)",
            opacity: isInViewSubtitle2 ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {subtitle2}
        </motion.p>
        <div>
          <a
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all"
            href="#"
            ref={subtitle2Ref}
            style={{
              transform: isInViewSubtitle2 ? "none" : "translateY(200px)",
              opacity: isInViewSubtitle2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

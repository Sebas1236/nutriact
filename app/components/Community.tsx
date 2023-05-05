"use client";
import { motion, useInView } from "framer-motion";
// import data
import { community } from "../utils/data";

// import components
import CommunitySlider from "./CommunitySlider";
import Image from "next/image";
import { useRef } from "react";

const Community = () => {
  // destructure community data
  const { icon, title, testimonials } = community;
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(sectionRef);
  const isInViewSlider = useInView(sliderRef);
  return (
    <motion.section
      className="section relative"
      ref={sectionRef}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="container mx-auto">
        <div className="flex">
          {/* section title */}
          <div className="section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto">
            <Image src={icon} alt="" />
            <h2 className="h2 section-title">
              {title} <span className="text-primary-200">.</span>
            </h2>
          </div>
          {/* slider */}
          <motion.div
            className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0"
            ref={sliderRef}
            style={{
              transform: isInViewSlider ? "none" : "translateX(200px)",
              opacity: isInViewSlider ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <CommunitySlider testimonials={testimonials} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Community;

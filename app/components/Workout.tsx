// import data
"use client";
import Image from "next/image";
import { workouts } from "../utils/data";
// import components
import WorkoutSlider from "./WorkoutSlider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workouts;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  return (
    <section
      className="section"
      ref={sectionRef}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {/* section title */}
      <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
        <Image src={icon} alt="" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <div>
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;

"use client";
import { useRef } from "react";

// import data
import { pricing } from "../utils/data";

// import components
import PlanList from "./PlanList";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // destructure pricing
  const { icon, title, plans } = pricing;
  return (
    <motion.section
      className="section"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
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
      {/* plan list */}
      <PlanList plans={plans} />
    </motion.section>
  );
};

export default Pricing;

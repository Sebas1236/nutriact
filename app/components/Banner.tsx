"use client";

import { motion } from "framer-motion";
import { banner } from "../utils/data";
import Image from "next/image";

const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <motion.h1
              className="h1 text-white mb-8"
              key={titlePart1 + titlePart2}
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 2.5, delay: 0.2 }}
            >
              {titlePart1} <br />
              <span className="text-primary-200">{titlePart2}</span>
            </motion.h1>
            <motion.p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              key={titlePart1 + titlePart2 + subtitle}
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 2.5, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            <motion.button
              className="btn btn-sm lg:btn-lg btn-secondary"
              key={titlePart1 + titlePart2 + textBtn}
              exit={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 2.5, delay: 0.7 }}
            >
              {textBtn}
            </motion.button>
          </div>
          <motion.div
            className="bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            key={titlePart1 + titlePart2 + "img"}
            exit={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 2.5, delay: 0.9 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

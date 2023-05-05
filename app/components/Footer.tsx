// import footer data
"use client";
import Image from "next/image";
import { footer } from "../utils/data";
import Link from "next/link";

const Footer = () => {
  // destructure footer data
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* logo */}
        <Link href="#">
          <Image className="" src={logo} alt="" />
        </Link>
        {/* copyright text */}
        <p className="text-neutral-300 text-sm">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;

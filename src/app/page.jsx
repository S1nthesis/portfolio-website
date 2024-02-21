"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative overflow-hidden hidden lg:block">
        <div className="w-full h-full transition-transform duration-300 transform relative">
          <Image src="/hero.gif" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Bringing Dreams to Life in the Digital Sphere.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Hi, I&#8217;m Chris Vu! Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
          <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-100">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

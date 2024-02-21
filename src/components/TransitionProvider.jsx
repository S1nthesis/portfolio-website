"use client";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const displayTitle = pathName === '/' ? 'Home' : capitalizeFirstLetter(pathName.substring(1));

  return (
    <div
      key={pathName}
      className="bg-gradient-to-b from-blue-100 to-red-100 overflow-auto"
    >
      {/* <motion.div
        className="h-screen w-screen bg-black fixed rounded-b-[100px] z-40"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      /> */}
      <motion.div
        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {displayTitle}
      </motion.div>
      <motion.div
        className="h-screen w-screen bg-black fixed rounded-t-[100px] bottom-0 z-30"
        initial={{ height: "140vh" }}
        animate={{ height: "0vh", transition: { delay: 0.5 } }}
        style={{ 
          backgroundImage: 'url("")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="h-24">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-6rem)]">{children}</div>
    </div>
  );
};

export default TransitionProvider;

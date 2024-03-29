import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialMediaLinks = [
  { url: "https://github.com/S1nthesis", icon: "/socials/github.png", alt: "GitHub" },
  { url: "https://www.linkedin.com/in/christophervu25/", icon: "/socials/linkedin.png", alt: "LinkedIn" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const logoVariants = {
    hover: {
      backgroundColor: ["#ff0000", "#00ff00", "#0000ff"],
      transition: {
        type: "tween",
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    unhover: {
      backgroundColor: "#000000",
    },
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const socialMediaListVariants = {
    closed: {
      y: -10,
      opacity: 0,
    },
    opened: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="flex items-center justify-center">
          <motion.div
            whileHover="hover"
            whileTap="hover"
            variants={logoVariants}
            initial="unhover"
            className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center"
          >
            <span className="text-lg font-semibold">CV</span>
          </motion.div>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialMediaLinks.map((socialMediaLink, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={socialMediaLink.url}>
              <Image
                src={socialMediaLink.icon}
                alt={socialMediaLink.alt}
                width={24}
                height={24}
              />
            </Link>
          </motion.div>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden overflow-hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            style={{ background: "#e2b29f" }}
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <NavLink link={link} key={link.title} />
              </motion.div>
            ))}
            {/* SOCIAL MEDIA LINKS IN RESPONSIVE MENU */}
            <div className="flex gap-4">
              {socialMediaLinks.map((socialMediaLink, index) => (
                <motion.div
                  variants={socialMediaListVariants}
                  key={index}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={socialMediaLink.url}>
                    <Image
                      src={socialMediaLink.icon}
                      alt={socialMediaLink.alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

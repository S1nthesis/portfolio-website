"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-red-300",
    title: "Aegis",
    desc: "I developed a hackathon registration system for 1000+ university students worldwide. Utilized RESTful APIs to transmit user data to MongoDB and AWS. Collaborated with organizers, incorporating feedback.",
    img: "/projects/aegis.png",
    link: "https://github.com/tamu-datathon-org/aegis",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Harmonia",
    desc: "As the tech lead of TAMU Datathon, I contributed to a webpage on our site integrating OAuth2 to link Discord accounts to user profiles. Built with Next.js, React, TypeScript, and CSS.",
    img: "/projects/harmonia.png",
    link: "https://github.com/tamu-datathon-org/harmonia",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Threading & Synchronization",
    desc: "As a developer, I managed synchronization, achieved parallel data transfers, and conducted thorough manual testing for robust multithreaded functionality in C++.",
    img: "/projects/threading.png",
    link: "",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Externia Mobile RPG",
    desc: "I developed a mobile 2D RPG with levels, puzzles, and enemies. Managed team as project manager, level designer, and lead. Implemented Unity2D Physics and vectors in C# for iOS/Android.",
    img: "/projects/externia.png",
    link: "https://github.com/S1nthesis/Externia-Mobile-RPG",
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="pb-16">
        <h1 className="text-3xl font-bold text-center mb-8">My Works</h1>
        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              style={{
                background: `linear-gradient(to right, ${item.color})`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`bg-gradient-to-r ${item.color}`} style={{ height: "100%" }}>
                <div className="flex justify-center">
                  <div className="p-4 md:h-64 lg:h-80 xl:h-96 flex justify-center">
                      <Image src={item.img} alt={item.title} width={300} height={300} className="object-contain" />
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.desc}</p>
                </div>
                {item.link && ( // Conditionally render the button if item.link is not blank
                  <div className="px-6 py-4 text-right">
                    <Link href={item.link} className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                      Visit
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

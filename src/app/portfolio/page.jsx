"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "SentinelAI",
    desc: "I developed SentinelAI, an advanced sentiment analysis tool for product reviews. Utilizing BERT models and PyTorch, I achieved a 95% accuracy rate. Our client-server architecture reduced inference time by 20%, and we scraped Yelp reviews using BeautifulSoup for analysis.",
    img: "/projects/sentinelai.png",
    link: "https://sentinelai.vercel.app/",
  },
  {
    id: 2,
    title: "Aegis",
    desc: "I developed a hackathon registration system for 1000+ university students worldwide. Utilized RESTful APIs to transmit user data to MongoDB and AWS. Collaborated with organizers, incorporating feedback.",
    img: "/projects/aegis.png",
    link: "https://github.com/tamu-datathon-org/aegis",
  },
  {
    id: 3,
    title: "Harmonia",
    desc: "As the tech lead of TAMU Datathon, I contributed to a webpage on our site integrating OAuth2 to link Discord accounts to user profiles. Built with Next.js, React, TypeScript, and CSS.",
    img: "/projects/harmonia.png",
    link: "https://github.com/tamu-datathon-org/harmonia",
  },
  {
    id: 4,
    title: "Threading & Synchronization",
    desc: "As a developer, I managed synchronization, achieved parallel data transfers, and conducted thorough manual testing for robust multithreaded functionality in C++.",
    img: "/projects/threading.png",
    link: "",
  },
  {
    id: 5,
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
              className="rounded overflow-hidden shadow-lg m-4"
              style={{
                width: "80vw", 
                background: `linear-gradient(to right, ${item.color})`,
              }}
            >
              <div className="" style={{ height: "100%" }}>
                <div className="text-gray-500 text-3xl font-bold p-4">
                  {item.id}
                </div>
                <div className="flex justify-center">
                  <motion.div className="p-4 md:h-64 lg:h-80 xl:h-96 flex justify-center" whileHover={{ scale: 1.1 }}>
                      <Image src={item.img} alt={item.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                  </motion.div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.desc}</p>
                </div>
                {item.link && ( // Conditionally render the button if item.link is not blank
                  <div className="px-6 py-4 text-right">
                    <Link href={item.link} className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded">
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

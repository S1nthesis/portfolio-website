import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.gif" alt="Hero" fill className="object-contain" />
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-bold">
      Bringing Dreams to Life in the Digital Sphere.
    </h1>
    {/* DESC */}
    <p className="md:text-xl">
      Welcome to my digital playground! I&#39;m passionate about using technology to
      make the world a better place. Whether it&#39;s crafting sleek websites or
      exploring the depths of machine learning, I&#39;m driven by a desire to create meaningful
      solutions. Let&#39;s shape a future where technology enhances our lives in
      incredible ways!
    </p>
      {/* BUTTONS */}
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
          View My Work
        </button>
        <button className="p-4 rounded-lg ring-1 ring-black">
          Contact Me
        </button>
      </div>
    </div>
  </div>;
};

export default Homepage;
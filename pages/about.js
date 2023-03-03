import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaDiscord, FaCopy } from "react-icons/fa";

function About() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("dily1234#8991");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <animated.div style={fade} className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-black">About Me</h1>
        <p className="text-lg mb-8 text-black">
          Hi there! My name is Dily, and Im a Full Stack developer based in the
          UK. I have a passion for building beautiful and functional websites
          and applications that make peoples lives easier.
        </p>
        <p className="text-lg mb-8 text-black">
          I have experience working with various technologies, including Java,
          C/C++, Haskell, Python, JavaScript, and Git. Im constantly learning
          and experimenting with new tools and techniques and am always excited
          to take on new challenges.
        </p>
        <div className="flex items-center mb-8">
          <p className="text-lg text-black">Discord: dily1234#8991</p>
          <button
            className="ml-2 focus:outline-none"
            onClick={handleCopy}
            aria-label="Copy Discord user tag"
          >
            <FaCopy className="text-lg text-black cursor-pointer hover:text-gray-600" />
          </button>
        </div>
        <p className="text-lg text-black">
          I look forward to hearing from you!
        </p>
      </animated.div>
    </div>
  );
}

export default About;

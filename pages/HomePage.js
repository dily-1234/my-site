import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

function Home() {
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });

  const slideInLeft = useSpring({
    to: { transform: "translateX(0px)", opacity: 1 },
    from: { transform: "translateX(-50px)", opacity: 0 },
    delay: 1000,
  });

  const slideInRight = useSpring({
    to: { transform: "translateX(0px)", opacity: 1 },
    from: { transform: "translateX(50px)", opacity: 0 },
    delay: 1000,
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <animated.div style={fadeIn}>
        <div className="bg-white rounded-full h-36 w-36 flex justify-center items-center">
          <img
            src="/2.png"
            alt="Profile picture"
            className="h-28 w-28 rounded-full"
          />
        </div>
      </animated.div>
      <animated.h1
        style={slideInLeft}
        className="text-5xl font-bold mt-8 mb-4 text-center"
      >
        Hi, I'm Dilkash Sahota. Also known as Dily.
      </animated.h1>
      <animated.p style={slideInRight} className="text-2xl mb-8 text-center">
        I'm a Full Stack Developer and Computer Science student.
      </animated.p>
      <animated.p style={fadeIn} className="text-2xl mb-8 text-center">
        Check out my projects on{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://github.com/dily-1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
      </animated.p>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/_dily1234_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-4xl hover:text-blue-500 cursor-pointer" />
        </a>
        <a
          href="https://github.com/dily-1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl hover:text-gray-800 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Home;

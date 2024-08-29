import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { IoPlayOutline } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVarients";
const About = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setVideoPlaying(false);
  };
  return (
    <div id="about" className="bg-[#f7f8fc] pb-18 pt-20">
      <div className="container mx-auto ">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8 ">
          {/* left side */}
          <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
           className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  className="w-full md:h-[450px] h-auto rounded-lg object-cover"
                  src={thumbnailImg}
                  alt="video th"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlayOutline className="size-12 text-white" />
                </button>
              </div>
            ) : null}

            {isVideoPlaying && (
              <div className="fixed inset-0 bg-black  bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative w-full h-full flex items-center justify-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NQcYZplTXnQ?si=nP5TMOPvRW-_J06T"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                  >
                    <AiOutlineClose className="text-white text-4xl " />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
          {/* right side */}
          <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
           className="md:w-1/2 w-full">
            <h2 className="text-3xl font-secondary font-bold mb-4  leading-snug">
              Individual Consult and Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              If you're struggling with these feelings, know that you're not
              alone. Our resources on overcoming stagnation are here to help you
              break free from the rut and regain momentum in your life. Whether
              it’s in your career, relationships, or personal growth.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <IoArrowForwardCircleSharp />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

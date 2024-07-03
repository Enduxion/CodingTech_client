import { useRef, useState } from "react";
import caro1 from "../../../assets/images/caro1.jpg";
import caro2 from "../../../assets/images/caro2.jpg";
import caro3 from "../../../assets/images/caro3.jpg";
import caro4 from "../../../assets/images/caro4.jpg";
import caro5 from "../../../assets/images/caro5.png";

import ReadMore from "../../../components/ReadMore/ReadMore";
import { ContactSVG, MonitorSVG, ProgrammingArrowSVG } from "../../../components/SVG/SVG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Lander() {
  const caroData = [caro5, caro2, caro3, caro4, caro1];
  const caroRef = useRef(null);
  const [currentCaroIndex, setCurrentCaroIndex] = useState(0);

  /**
   * @param {number} direction
   **/
  const changeIndex = (direction) => {
    if (currentCaroIndex >= 0 && direction === -1) {
      setCurrentCaroIndex(caroData.length - 1);
    } else if (currentCaroIndex === (caroData.length - 1) && direction === 1) {
      setCurrentCaroIndex(0);
    } else {
      setCurrentCaroIndex((prevIndex) => prevIndex + direction);
    }
  };

  return (
    <motion.div
      className="w-full flex flex-row mt-nav"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Carousal */}
      <div className="relative w-3/5">
        <div
          className="w-full flex flex-row overflow-hidden relative scroll-smooth h-[calc(100vh-6.5rem)] "
          ref={caroRef}
        >
          {caroData.map((caro, index) => (
            <img className={`object-cover absolute h-full w-full top-0 left-0 flex flex-grow transition-opacity duration-500 ${currentCaroIndex === index ? "opacity-100": "opacity-0"}`} src={caro} key={index} />
          ))}
        </div>
        <div
          className="absolute top-1/2 left-0 z-10 text-white text-3xl ml-4 mix-blend-exclusion cursor-pointer"
          onClick={() => changeIndex(-1)}
        >
          <i className="fas fa-angle-left"></i>
        </div>
        <div
          className="absolute top-1/2 right-0 z-10 text-white text-3xl mr-4 mix-blend-exclusion cursor-pointer"
          onClick={() => changeIndex(1)}
        >
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
      {/* Side Panel */}
      <div className="w-2/5 flex flex-col">
        <div className="w-full flex flex-col justify-center items-center p-8 h-1/2 relative bg-gradient-to-tl from-blue-700 to-primary">
          <ProgrammingArrowSVG className="h-full z-[0] opacity-10 aspect-square absolute stroke-0 fill-white " />
          <span className="text-2xl z-[1] font-bold text-white tracking-wide flex flex-row gap-2 py-2 px-4">
            About 
          </span>
          <ReadMore className="text-justify text-sm z-[1] text-white overflow-hidden line-clamp-6" rmClassName="text-white underline z-[1]" href="/about">
            We provide education-focused digital learning courses that can be access through the Internet. Students can browse through various sections looking for courses they like, or they can search for specific chapters based on course name. We use digitalization to improve the current educational system, understanding the need to modernize Nepal's traditional learning methods. Coding technology is willing to work to make a digital effect in the existing education system by combining our knowledge with cutting-edge technology. We present blended learning technology, which combines academic knowledge with practical and case-based information.
          </ReadMore>
        </div>
        <div className="flex flex-row w-full h-1/2 bg-black">
          <div className="flex flex-col w-1/2 h-full bg-blue-700 relative items-center justify-center">
            <MonitorSVG className="h-full z-[0] opacity-10 aspect-square absolute stroke-0 fill-white" />
            <span className="text-xl z-[1] text-white tracking-wide flex flex-row gap-2 py-2 px-4 text-center">
              Enroll with our expert teachers
            </span>
            <Link to="/register" className="text-lg z-[1] w-1/2 text-white tracking-wide flex flex-row gap-2 py-1 px-5 items-center rounded-full bg-white bg-opacity-15 hover:bg-opacity-30 border-2 border-transparent justify-center hover:border-white hover:border-opacity-30 hover:gap-3 duration-150">
              <span>Join</span><i className="fas fa-arrow-right text-sm"></i>
            </Link>
          </div>
          <div className="flex w-1/2 h-full bg-orange-500 relative flex-col items-center justify-center">
            <ContactSVG className="h-full z-[0] aspect-square absolute stroke-white opacity-25" />
            <span className="text-xl z-[1] text-white tracking-wide flex flex-row gap-2 py-2 px-4 text-center">
              Contact us to know more
            </span>
            <Link to="/register" className="text-lg z-[1] w-1/2 text-white tracking-wide flex flex-row gap-2 py-1 px-5 items-center bg-gray-500 rounded-full bg-opacity-50 hover:bg-opacity-30 border-2 border-transparent justify-center hover:border-gray-500 hover:border-opacity-30 hover:gap-3 duration-150">
              <span>Contact</span><i className="fas fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

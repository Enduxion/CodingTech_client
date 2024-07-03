import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Fcard({ name, link, img, duration, index }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigator = useNavigate();
  return (
    <motion.div
      onClick={() => navigator(link)}
      className="w-full border-2 shadow-lg rounded-2xl cursor-pointer overflow-hidden relative"
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.85 }}
      transition={{ x: {delay: 0.1 * index, duration: 1}, opacity: {delay: 0.1 * index, duration: 1}, ease: "backInOut" }}
    >
      <div
        className="w-full flex relative"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <img src={img} className="object-cover" alt={name} />
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute top-0 left-0 flex w-full h-full origin-center items-center justify-center bg-gradient-to-r from-[#818cf8cc] to-[#60a5facc]  z-10 rounded-full overflow-hidden"
              initial={{ scale: 0, borderRadius: "50%" }}
              animate={{ scale: [0, 1.5, 1], borderRadius: ["50%", "50%", 0], opacity: 1 }}
              exit={{ scale: 4, borderRadius: "50%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
            >
              <motion.span
                className="bg-white px-4 py-2 rounded-full hover:bg-black hover:text-white duration-100"
                whileTap={{ scale: 0.85 }}
              ><i className="fas fa-angle-right"></i></motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="bg-white flex flex-row px-3 py-1 gap-2 items-center justify-between">
        <div className="flex flex-col">
          <span className="font-roboto w-full text-lg">{name}</span>
          <span className="font-roboto">{duration}</span>
        </div>
        <Link to={link} className="">
          <i className="fas fa-angle-right"></i>
        </Link>
      </div>
    </motion.div>
  );
}

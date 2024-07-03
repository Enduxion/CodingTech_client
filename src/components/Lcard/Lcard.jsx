import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Lcard({ children, text, link, className }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigator = useNavigate();
  return (
    <div
      className={className}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {children}
      <span className="text-xl z-[1] text-white tracking-wide flex flex-row gap-2 py-2 px-4 text-center">
        {text}
      </span>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-[1] flex items-center justify-center cursor-pointer"
            onClick={() => navigator(link)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            transition={{ duration: 0.1 }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <i className="relative fas fa-angle-right text-white text-3xl"></i>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

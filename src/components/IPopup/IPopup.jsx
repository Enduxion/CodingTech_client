import { motion } from "framer-motion";
export default function IPopup({ name, description, index, link, onClick }) {
  return (
    <motion.div
      className="absolute mt-nav top-0 left-0 w-full h-screen bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <i
        className="fas fa-close cursor-pointer text-xl text-white"
        onClick={onClick}
      ></i>
      <div className=""></div>
    </motion.div>
  );
}

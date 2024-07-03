import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Fcard({ name, link, img, duration, index }) {
  const navigator = useNavigate();
  return (
    <motion.div
      onClick={() => navigator(link)}
      className="w-full border-2 shadow-lg rounded-2xl cursor-pointer overflow-hidden"
      initial={{ x: -20, opacity: 0 }}
      whileHover={{  }}
      whileInView={{ x: 0, opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 * index, ease: "backInOut" }}
    >
      <div className="">
        <img src={img} className="object-cover" alt={name} />
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
  )
}
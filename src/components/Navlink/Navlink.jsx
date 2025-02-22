import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navlink({ name, link, dropdown, index }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="py-4 relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <Link
        to={link}
        className="uppercase tracking-widest px-4 py-1 hover:border-b-gray-500 border-b-2 border-transparent duration-150"
      >
        {name}
        {dropdown && <i className="fas fa-angle-down ml-2"></i>}
      </Link>
      <AnimatePresence>
        {showDropdown && dropdown && (
          <motion.div
            className="flex flex-col w-[150%] h-64 overflow-y-scroll rounded-b-lg shadow-lg absolute top-full border-b-[1px] border-slate-400 bg-opacity-90 backdrop-blur-md bg-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {dropdown.map((dropdownItem) => (
              <div key={dropdownItem._id} className="flex flex-col w-full">
                <Link className="px-4 py-2 rounded-lg truncate hover:bg-gray-300" to={`${link}/${dropdownItem._id}`}>
                  {dropdownItem.name}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

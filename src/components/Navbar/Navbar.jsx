import Navlink from "../Navlink/Navlink";
import logoImage from "../../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [allCourses, setAllCourses] = useState(null);
  const [showTop, setShowTop] = useState(true);

  useEffect(() => {
    if (!allCourses) {
      axios.get("http://localhost:3000/api/courses/get_courses").then((res) => {
        setAllCourses(res.data);
      });
    }

    const handleScroll = () => {
      if (scrollY > 200) {
        setShowTop(false);
      } else {
        setShowTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allCourses]);

  const navlinks = [
    {
      name: "Home",
      link: "/",
      dropdown: null,
    },
    {
      name: "About",
      link: "/about",
      dropdown: null,
    },
    {
      name: "Courses",
      link: "/courses",
      dropdown: allCourses,
    },
    {
      name: "Gallery",
      link: "/gallery",
      dropdown: null,
    },
    {
      name: "Contact",
      link: "/contact",
      dropdown: null,
    },
  ];
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      style={{
        height: showTop ? "6.5rem" : "4.5rem",
        transition: "0.5s height"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="navbar"
      className="fixed top-0 left-0 w-full h-nav bg-white flex flex-row justify-between px-8 border-b-[1px] border-slate-400 items-center z-50"
    >
      <div>
        <img src={logoImage} alt="Coding Technology Logo" />
      </div>
      <div className="flex flex-col items-end relative">
        <AnimatePresence>
          {showTop && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="flex flex-row rounded-b-xl gap-8 bg-gradient-to-r from-primary to-blue-800 px-8 py-2 text-white overflow-hidden"
            >
              <div className="flex flex-row gap-1 items-center">
                <i className="fa-solid fa-phone"></i>
                <span className="">+977-1-5100788</span>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <i className="fa-solid fa-envelope"></i>
                <span className="">info@codingtechnology.com.np</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex flex-row py-1"
          style={{
            y: showTop ? 0 : [-10, 0],
            transition: "0.5s y"
          }}
        >
          {navlinks.map((navlink, index) => (
            <Navlink
              index={index}
              key={index}
              name={navlink.name}
              link={navlink.link}
              dropdown={navlink.dropdown}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

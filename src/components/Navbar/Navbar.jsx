import Navlink from "../Navlink/Navlink";
import logoImage from "../../assets/images/logo_t.png";
import { useEffect, useState } from "react";
import axios from "axios";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const variants = {
    initial: { rotate: 0 },
    onHover: { rotate: [0, "20deg", "-20deg", "10deg", "-10deg", 0] },
  };

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      style={{
        height: showTop ? "6.5rem" : "4.5rem",
        transition: "0.5s height",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="navbar"
      className="fixed top-0 left-0 w-full h-nav bg-gray-200 flex flex-row justify-between px-8 border-b-[1px] border-slate-400 bg-opacity-90 backdrop-blur-md items-center z-50"
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
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="flex flex-row rounded-b-xl gap-8 bg-gradient-to-r from-primary to-blue-800 px-8 py-2 text-white overflow-hidden"
            >
              <motion.div
                className="flex flex-row gap-1 items-center"
                initial="initial"
                animate="initial"
                whileHover="onHover"
              >
                <motion.i
                  className="fa-solid fa-phone"
                  variants={variants}
                ></motion.i>
                <Link to="tel:15100788" className="">
                  +977-1-5100788
                </Link>
              </motion.div>
              <motion.div
                className="flex flex-row gap-1 items-center"
                initial="initial"
                animate="initial"
                whileHover="onHover"
              >
                <motion.i
                  className="fa-solid fa-envelope"
                  variants={variants}
                ></motion.i>
                <Link to="mailto:info@codingtechnology.com.np" className="">
                  info@codingtechnology.com.np
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="flex flex-row py-1"
          animate={{ y: showTop ? 0 : [0, -10, 0] }}
          transition={{ duration: 1, ease: "backOut" }}
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

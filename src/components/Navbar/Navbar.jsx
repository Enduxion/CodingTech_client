import Navlink from "../Navlink/Navlink";
import logoImage from "../../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [allCourses, setAllCourses] = useState(null);
  useEffect(() => {
    if (!allCourses) {
      axios.get("http://localhost:3000/api/courses/get_courses").then((res) => {
        setAllCourses(res.data);
      })
    }
  }, []);
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
      dropdown: allCourses
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
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full h-nav bg-white flex flex-row justify-between px-8 border-b-[1px] border-slate-400 items-center z-50"
    >
      <div>
        <img src={logoImage} alt="Coding Technology Logo" />
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-row rounded-b-xl gap-8 bg-gradient-to-r from-primary to-blue-800 px-8 py-2 text-white">
          <div className="flex flex-row gap-1 items-center">
            <i className="fa-solid fa-phone"></i>
            <span className="">+977-1-5100788</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <i className="fa-solid fa-envelope"></i>
            <span className="">info@codingtechnology.com.np</span>
          </div>
        </div>
        <div className="flex flex-row py-1">
          {navlinks.map((navlink, index) => (
            <Navlink
              key={index}
              name={navlink.name}
              link={navlink.link}
              dropdown={navlink.dropdown}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

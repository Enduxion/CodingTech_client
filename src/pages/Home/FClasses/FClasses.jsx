import { useEffect, useState } from "react";
import axios from "axios";
import Fcard from "../../../components/Fcard/Fcard";

export default function FClasses() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    if (!courses) {
      axios.get("https://codingtech.onrender.com/api/courses/get_courses").then((res) => {
        setCourses(res.data);
      })
    }
  }, []);
  return (
    <div className="w-full flex flex-col p-8 bg-gray-200">
      <span className="w-full flex flex-col text-3xl font-bold">
        <span className="font-roboto">Featured Courses <i className="fas fa-laptop-code"></i></span>
        <span className="w-full bg-[linear-gradient(90deg,#16157a_0%,#16157a_50%)] h-1"></span>
      </span>
      <div className="w-full grid grid-cols-4 gap-4 my-4">
        {
          courses && courses.map((course, index) => {
            return (
              <Fcard name={course.name} link={`/courses/${course._id}`} img={course.img} duration={course.duration} key={index} index={index % 4} />
            )
          })
        }
      </div>
    </div>
  );
}
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function RightSidePanel({ className }) {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    if (!courses) {
      axios.get("http://localhost:3000/api/courses/get_courses").then((res) => {
        setCourses(res.data);
      });
    }
  }, []);
  return (
   <div className={className}>
      <span className="font-roboto text-xl">Other courses <i className="fas fa-graduation-cap"></i></span>
      <Link className="text-justify text-gray-400 hover:text-black" to="/courses">Check out our other courses!</Link>
      <div className="flex flex-col w-full">
        {courses && courses.map((course, index) => (
          <Link className="px-2 py-2 rounded-lg text-blue-500 hover:bg-gray-300 hover:text-black duration-100" key={index} to={`/courses/${course._id}`}>
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
import axios from "axios";
import { useEffect, useState } from "react";
import Fcard from "../../components/Fcard/Fcard";

export default function Courses() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/api/courses/get_courses").then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col mt-nav p-16 pt-4">
      <span className="font-roboto text-4xl">Courses</span>
      <div className="bg-gradient-to-r from-primary via-blue-500 via-70% to-blue-800 rounded-full h-1 mb-4" />
      <div className="w-full grid grid-cols-3 gap-8">
        {courses &&
          courses.map((course, index) => (
            <Fcard
              key={index}
              name={course.name}
              img={course.img}
              link={course._id}
              duration={course.duration}
            />
          ))}
      </div>
    </div>
  );
}

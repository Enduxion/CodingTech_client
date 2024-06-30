import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lander from "./Lander/Lander";

export default function Course() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [courseDescription, setCourseDescription] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/courses/get_course/${id}`)
        .then((res) => {
          setCourseData(res.data.course);
        });
    }
  }, []);

  useEffect(() => {
    if (courseData) {
      axios.get(courseData.description).then((res) => {
        setCourseDescription(res.data);
      });
    }
  }, [courseData]);

  return (
    <div className="w-full flex mt-nav">
      <Lander courseData={courseData} courseDescription={courseDescription}/>
    </div>
  );
}

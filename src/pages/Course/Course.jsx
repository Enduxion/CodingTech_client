import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lander from "./Lander/Lander";
import LeftSidePanel from "./LeftSidePanel/LeftSidePanel";
import Overview from "./Overview/Overview";
import RightSidePanel from "./RightSidePanel/RightSidePanel";

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
    <div className="w-full flex flex-col mt-nav">
      <Lander courseData={courseData} courseDescription={courseDescription} />
      {courseDescription !== null ? (
        <div className="w-full relative flex flex-row items-center justify-center">
          <LeftSidePanel
            className="absolute top-0 left-0 w-1/5 flex flex-col bg-gray-100 h-full p-8 gap-4"
            faqs={courseDescription.faqs}
            shortDesc={courseDescription.shortDesc}
            name={courseData.name}
          />
          <Overview className="w-3/5 bg-white p-8" cD={courseDescription} c={courseData} />
          <RightSidePanel
            className="absolute top-0 right-0 w-1/5 flex flex-col bg-gray-100 h-full p-8 gap-1"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

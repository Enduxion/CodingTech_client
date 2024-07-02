import { Link } from "react-router-dom";
export default function Lander({courseData, courseDescription}) {
  return (
    <div className='w-full flex bg-[linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.2)),url("../../../src/assets/images/about.jpg")] bg-cover'>
      <div className="w-3/4 flex flex-col justify-evenly gap-2 text-white p-16">
        <span className="text-3xl font-roboto">
          {courseData ? courseData.name : "name"}
        </span>
        <span className="">
          {courseDescription
            ? courseDescription.shortDesc
            : "template description"}
        </span>
        <div className="flex flex-row gap-3">
          <span className="flex flex-row gap-2 items-center">
            <i className="far fa-calendar"></i>
            {courseData ? courseData.duration : "n months"}
          </span>
          <span className="flex flex-row gap-2 items-center">
            <i className="fa fa-arrow-trend-up"></i>
            {courseDescription ? courseDescription.level : "n difficult"}
          </span>
        </div>
      </div>
      <div className="w-1/4 flex-grow flex flex-col items-center justify-center gap-4">
        <Link
          to="/join"
          className="w-1/2 bg-gradient-to-r from-primary via-blue-700 via-70% to-blue-800  text-white items-center justify-center flex py-2 gap-2 rounded-lg font-roboto shadow-xl hover:gap-3 hover:via-60% duration-100"
        >
          Join <i className="fas fa-angle-right text-sm"></i>
        </Link>
        <Link
          to="/questions"
          className="w-1/2 bg-gradient-to-r from-orange-700 via-orange-500 via-70% to-orange-800  text-white items-center justify-center flex py-2 gap-2 rounded-lg font-roboto shadow-xl hover:gap-3 hover:via-60% duration-100"
        >
          Know More <i className="fas fa-angle-right text-sm"></i>
        </Link>
      </div>
    </div>
  );
}

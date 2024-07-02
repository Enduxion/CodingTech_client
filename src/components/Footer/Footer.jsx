import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col w-full gap-8 pb-4 p-16 bg-gradient-to-r from-primary via-blue-600 via-70% to-blue-800">
      <div className="flex flex-row w-full">
      <div className="text-gray-400 flex flex-col w-1/4 items-center">
        <span className="text-lg text-white font-roboto">Coding Technology Pvt. Ltd.</span>
        <span className="">Balkumari, Koteshwor</span>
        <span className="">Opposite of CCRC</span>
        <span className="">Uptown Building, 2nd Floor</span>
        <span className="">Nepal</span>
      </div>
      <div className="w-1/4 text-white flex items-center flex-col">
        <span className="font-roboto text-lg">Navigate</span>
        <div className="flex flex-col text-gray-400">
          <div className="flex flex-row gap-2 items-center hover:text-white">
            <i className="fas fa-angle-right"></i><Link to="/">Home</Link>
          </div>
          <div className="flex flex-row gap-2 items-center hover:text-white">
            <i className="fas fa-angle-right"></i><Link to="/">About</Link>
          </div>
          <div className="flex flex-row gap-2 items-center hover:text-white">
            <i className="fas fa-angle-right"></i><Link to="/">Courses</Link>
          </div>
          <div className="flex flex-row gap-2 items-center hover:text-white">
            <i className="fas fa-angle-right"></i><Link to="/">Contact</Link>
          </div>
        </div>
      </div>
      <div className="w-1/4 text-white flex items-center flex-col">
        <span className="font-roboto text-lg">Our contact</span>
        <div className="flex flex-col text-gray-400">
          <div className="flex flex-row gap-2 items-center justify-center hover:text-white">
            <i className="fas fa-phone"></i>+977-1-5100788
          </div>
          <div className="flex flex-row gap-2 items-center justify-center hover:text-white">
            <i className="fas fa-envelope"></i>info@codingtechnology.com.np
          </div>
          <div className="flex flex-row gap-2 items-center justify-center hover:text-white">
            <i className="fa fa-map-marker"></i>Balkumari, Koteshwor
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center text-white flex-col">
        <span className="font-roboto text-lg">Additional</span>
        <Link to="https://maps.app.goo.gl/ocGaxG8HGvZ1viiD9"className="text-gray-400 hover:text-white gap-1 flex flex-row items-center" target="_blank">
          <i className="fas fa-map"></i>Open location in map
        </Link>
        <Link to="tel:9801119050"className="text-gray-400 hover:text-white gap-1 flex flex-row items-center" target="_blank">
          <i className="fas fa-phone"></i>Contact the president
        </Link>
        <Link to="mailto:pg.pawangurung@gmail.com"className="text-gray-400 hover:text-white gap-1 flex flex-row items-center" target="_blank">
          <i className="fas fa-envelope"></i>Contact the developer
        </Link>
      </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-white">
        <span>
          Copyright &copy; 2024. All rights reserved.{" "}
          <Link to="/" className="text-white underline hover:text-slate-300">Coding Technology Pvt. Ltd.</Link>
        </span>
        <span>Developed by: <Link to="mailto:pg.pawangurung@gmail.com" className="text-orange-400 hover:text-orange-500 underline">Pawan Gurung</Link></span>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Icard({ name, link, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full border-2 shadow-lg hover:shadow-2xl rounded-xl cursor-pointer overflow-hidden bg-white"
    >
      <div className="">
        <img src={link} className="object-cover" alt={name} />
      </div>
      <div className="flex flex-row px-3 pb-3 pt-1 gap-2 items-center justify-between">
        <div className="flex flex-col">
          <span className="font-roboto w-full text-lg">{name}</span>
        </div>
        <Link to={link} className="">
          <i className="fas fa-angle-right"></i>
        </Link>
      </div>
    </div>
  )
}
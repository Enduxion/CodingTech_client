import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Fcard({ name, link, img, duration }) {
  const navigator = useNavigate();
  return (
    <div
      onClick={() => navigator(link)}
      className="w-full border-2 shadow-lg hover:shadow-2xl rounded-2xl cursor-pointer overflow-hidden"
    >
      <div className="">
        <img src={img} className="object-cover" alt={name} />
      </div>
      <div className="bg-white flex flex-row px-3 py-1 gap-2 items-center justify-between">
        <div className="flex flex-col">
          <span className="font-roboto w-full text-lg">{name}</span>
          <span className="font-roboto">{duration}</span>
        </div>
        <Link to={link} className="">
          <i className="fas fa-angle-right"></i>
        </Link>
      </div>
    </div>
  )
}
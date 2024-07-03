import { useNavigate } from "react-router-dom";
import unknown from "../../assets/images/Reviews/unknown.jpg";
import { useEffect, useState } from "react";

export default function Tcard({ name, stars, text, src, link, index, onFocus }) {
  const navigator = useNavigate();
  const [classes, setClasses] = useState("");
  useEffect(() => {
    if (index !== onFocus) {
      const distance = index - onFocus;
      setClasses(`shrink-0 w-[calc(33.34%-0.67rem)] flex flex-col rounded-3xl bg-white aspect-square p-4 cursor-pointer shadow-lg ${distance === 1 ? "scale-[0.9] opacity-75" : "scale-[0.85] opacity-50"}`);
    } else {
      setClasses("shrink-0 w-[calc(33.34%-0.67rem)] flex flex-col rounded-3xl bg-white aspect-square p-4 cursor-pointer shadow-lg")
    }
  }, [onFocus, index]);
  return (
    <div className={classes} onClick={() => navigator(link)}>
      <div className="flex flex-row h-16 justify-between">
        <img
          src={src ? src : unknown}
          className="rounded-full h-full aspect-square object-cover"
          alt="profile"
        />
        <div className="flex flex-col">
          <span className="text-right text-lg">{name}</span>
          <span className="text-right">
            {Array.from({ length: stars }, (_, i) => (
              <i key={i} className="fa-solid fa-star text-primary"></i>
            ))}
          </span>
        </div>
      </div>
      <div className="line-clamp-[12] ">
        <div className="">{text}</div>
      </div>
    </div>
  );
}

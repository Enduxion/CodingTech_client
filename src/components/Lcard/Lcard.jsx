import { useState } from "react";
import { Link } from "react-router-dom";

export default function Lcard({ children, text, link, className }) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {children}
      <span className="text-xl z-[1] text-white tracking-wide flex flex-row gap-2 py-2 px-4 text-center">
        {text}
      </span>
      {showOverlay && (
        <Link className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1] flex items-center justify-center" to={link}>
            <i className="relative fas fa-angle-right text-white text-3xl"></i>
        </Link>
      )}
    </div>
  );
}

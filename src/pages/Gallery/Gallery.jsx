import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Icard from "../../components/Icard/Icard";
import IPopup from "../../components/IPopup/IPopup";

export default function Gallery() {
  const [imgLinks, setImgLinks] = useState(null);
  const [imgIndex, setImgIndex] = useState(-1);

  useEffect(() => {
    axios.get("http://localhost:3000/api/images/get_images").then((res) => {
      setImgLinks(res.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col mt-nav p-16 pt-4">
      <span className="font-roboto text-4xl">Images</span>
      <div className="bg-gradient-to-r from-primary via-blue-500 via-70% to-blue-800 rounded-full h-1 mb-4" />
      <div className="w-full grid grid-cols-3 gap-8">
        {imgLinks &&
          imgLinks.map((imgLink, index) => (
            <Icard
              key={index}
              name={imgLink.name}
              link={imgLink.link}
              onClick={() => setImgIndex(index)}
              description={imgLink.description}
            />
        ))}
      </div>
      {
        (imgIndex !== -1) && <IPopup />
      }
    </div>
  );
}
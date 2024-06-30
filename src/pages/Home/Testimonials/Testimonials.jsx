import { useEffect, useRef, useState } from "react";

import Tcard from "../../../components/Tcard/Tcard";

import anishDhakal from "../../../assets/images/Reviews/2.jpg";
import sanjayShah from "../../../assets/images/Reviews/1.png";

export default function Testimonials() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToChild = (index) => {
    const carousel = carouselRef.current;
    const childWidth = carousel.children[0].offsetWidth;
    carousel.scrollLeft =
      index * childWidth +
      index * parseFloat(getComputedStyle(document.documentElement).fontSize);
  };

  useEffect(() => {
    scrollToChild(currentIndex);
  }, [currentIndex]);

  const reviews = [
    {
      name: "Sanjay Shah",
      src: sanjayShah,
      text: "Hi, I am Sanjay Shah, a BSc.CSIT student and I have joined Coding Technology at Balkumari. I have enrolled in Java course here.The classes at Coding Technology from the very first day is interesting. Teaching technique is superb and I am getting all my doubts clear that I was facing in the past college and institute. The cost of the courses are very low as compared to the market. I am happy to be improving myself currently in Java Technology @ Coding Technology.",
      stars: 5,
    },
    {
      name: "Anish Dhakal",
      src: anishDhakal,
      text: "The very first day of the class was really troublesome as my classmate was extra talented in the field of IT. But it’s not a big deal as the teacher is very experienced and knew how to take the class in the right way. I am super happy to get a teacher like Rakesh Sir. Every new day is a task of…",
      stars: 4,
    },
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam.",
      stars: 3,
    },
    {
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam.",
      stars: 2,
    },
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam.",
      stars: 1,
    },
  ];
  return (
    <div className="w-full flex flex-col p-8 bg-gray-100 relative">
      <div
        className="absolute top-1/2 left-0 z-10 text-white text-2xl ml-4 mix-blend-difference cursor-pointer"
        onClick={() => {
          if (currentIndex > 0 && currentIndex <= reviews.length - 1) {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        <i className="fas fa-angle-left"></i>
      </div>
      <div
        className="absolute top-1/2 right-0 z-10 text-white text-2xl mr-4 mix-blend-difference cursor-pointer"
        onClick={() => {
          if (currentIndex >= 0 && currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      >
        <i className="fas fa-angle-right"></i>
      </div>
      <span className="w-full flex flex-col text-3xl font-bold">
        <span className="font-roboto">
          Testimonials <i className="far fa-comments"></i>
        </span>
        <span className="w-full bg-[linear-gradient(90deg,#16157a_0%,#16157a_50%)] h-1"></span>
      </span>
      <div
        className="flex flex-row gap-4 overflow-hidden w-full py-4 scroll-smooth"
        ref={carouselRef}
      >
        {reviews.map((review, index) => (
          <Tcard
            key={index}
            name={review.name}
            text={review.text}
            stars={review.stars}
            src={review.src}
          />
        ))}
        <div className="shrink-0 w-[calc(33.34%-1rem)] aspect-square"></div>
        <div className="shrink-0 w-[calc(33.34%-1rem)] aspect-square"></div>
      </div>
    </div>
  );
}

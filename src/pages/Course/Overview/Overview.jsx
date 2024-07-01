import { useState } from "react";

export default function Overview({ className, cD, c }) {
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [whatOpen, setWhatOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  const syllabusToArr = Object.entries(cD.Syllabus);

  return (
    <div className={className}>
      <div className="font-roboto text-4xl w-full text-center">{c.name}</div>
      <div className="w-full h-96 overflow-hidden rounded-full mb-5">
        <img src={c.img} id="What" className="object-cover saturate-50" />
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div className="" id="Why">
          <span className="text-lg text-blue-500 font-roboto hover:bg-gray-200 rounded-lg p-2 cursor-pointer" onClick={ () => setWhatOpen(!whatOpen) }>
            <i className="fas fa-angle-right"></i> What is {c.name}?
          </span>
          {whatOpen && <div className="mt-2 ml-4">{cD.what}</div>}
        </div>
        <div className="" id="Career">
          <span className="text-lg text-blue-500 font-roboto hover:bg-gray-200 rounded-lg p-2 cursor-pointer" onClick={ () => setWhyOpen(!whyOpen) }>
            <i className="fas fa-angle-right"></i> Why choose {c.name}?
          </span>
          { whyOpen && <div className="mt-2 ml-4">{cD.why}</div> }
        </div>
        <div className="" id="Syllabus">
          <span className="text-lg text-blue-500 font-roboto hover:bg-gray-200 rounded-lg p-2 cursor-pointer" onClick={ () => setCareerOpen(!careerOpen) }>
            <i className="fas fa-angle-right"></i> Career in {c.name}.
          </span>
          { careerOpen && <div className="mt-2 ml-4">{cD.Career}</div> }
        </div>
        <div className="">
          <span
            onClick={() => setSyllabusOpen(!syllabusOpen)}
            className="text-lg text-blue-500 font-roboto hover:bg-gray-200 rounded-lg p-2 cursor-pointer "
          >
            <i className="fas fa-angle-right"></i> Syallabus of {c.name}.
          </span>
          {syllabusOpen &&
            syllabusToArr.map((chapter, index) => {
              return (
                <div className="mt-4 indent-4">
                  <span className="text-gray-800 font-roboto text-lg font-bold">
                    {index + 1}. {chapter[0]}
                  </span>
                  <div className="flex flex-col indent-8">
                    {chapter[1].map((lesson, index) => {
                      return <span>{lesson}</span>;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

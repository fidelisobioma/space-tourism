import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import data from "./data.json/";
function Crew() {
  const [index, setIndex] = useState(0);
  const crewMember = data.crew[index];

  //logic to handle click option
  const handleIndex0 = () => {
    setIndex(0);
  };
  const handleIndex1 = () => {
    setIndex(1);
  };
  const handleIndex2 = () => {
    setIndex(2);
  };
  const handleIndex3 = () => {
    setIndex(3);
  };
  //logic to handle carousel

  useEffect(() => {
    const key = setInterval(() => {
      setIndex((index) =>
        index == data.crew.length - 1 ? (index = 0) : index + 1
      );
    }, 5000);
    return () => {
      clearInterval(key);
    };
  }, [index]);
  console.log(index);
  return (
    <div className="bg-slate-900 bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-cover bg-no-repeat grid min-h-screen">
      <Navbar />
      <div className="p-6 md:mt-12">
        <div className="md:flex flex-wrap justify-center items-end gap-10">
          <div>
            <h1 className="text-white text-center md:text-left md:text-2xl  md:w-[450px] mb-6 ">
              <span className="text-gray-500 font-mono">02</span> MEET YOUR CREW
            </h1>
          </div>
          <div className="md:w-[350px]"></div>
        </div>
        <div className="md:flex flex-row-reverse justify-center items-center gap-10">
          <div className="grid justify-center gap-4 ">
            <div className="md:max-w-[350px]">
              <img
                src={crewMember.images.png}
                alt={crewMember.name}
                className="w-full"
              />
            </div>
            <div className="flex gap-4 justify-center md:hidden">
              <div
                onClick={handleIndex0}
                className={`size-3 rounded-full bg-gray-500 ${
                  index == 0 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex1}
                className={`size-3 rounded-full bg-gray-500 ${
                  index == 1 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex2}
                className={`size-3 rounded-full bg-gray-500 ${
                  index == 2 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex3}
                className={`size-3 rounded-full bg-gray-500 ${
                  index == 3 ? "bg-white" : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="text-center md:text-left leading-relaxed mt-4 text-white md:max-w-[450px]">
            <p className="text-gray-300 font-sans">
              {crewMember.role.toUpperCase()}
            </p>
            <p className="text-white text-3xl md:mt-2 font-mono">
              {crewMember.name.toUpperCase()}
            </p>
            <p className="md:mt-4 font-sans">{crewMember.bio}</p>
            <div className=" gap-4 justify-start mt-12 hidden md:flex">
              <div
                onClick={handleIndex0}
                className={`size-3 rounded-full bg-gray-500 hover:cursor-pointer ${
                  index == 0 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex1}
                className={`size-3 rounded-full bg-gray-500 hover:cursor-pointer ${
                  index == 1 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex2}
                className={`size-3 rounded-full bg-gray-500 hover:cursor-pointer ${
                  index == 2 ? "bg-white" : ""
                }`}
              ></div>
              <div
                onClick={handleIndex3}
                className={`size-3 rounded-full bg-gray-500 hover:cursor-pointer ${
                  index == 3 ? "bg-white" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        {/*end */}
      </div>
    </div>
  );
}
export default Crew;

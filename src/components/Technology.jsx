import { useState } from "react";
import Navbar from "./Navbar";
import data from "./data.json";

function Technoloy() {
  console.log(data.technology);
  const [index, setIndex] = useState(0);
  const technologies = data.technology[index];
  //logic to handle click
  const handleIndex0 = () => {
    setIndex(0);
  };
  const handleIndex1 = () => {
    setIndex(1);
  };
  const handleIndex2 = () => {
    setIndex(2);
  };
  return (
    <div className="bg-slate-900 bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)] bg-cover bg-no-repeat grid min-h-screen">
      <Navbar />
      <div className="md:mt-12 md:p-6">
        <div className="md:flex flex-wrap justify-center items-end gap-10 mt-4">
          <div>
            <h1 className="text-white text-center md:text-left md:text-2xl  md:w-[450px] mb-6 ">
              <span className="text-gray-500">03</span> SPACE LAUNCH 101
            </h1>
          </div>
          <div className="md:w-[350px]"></div>
        </div>
        <div className="md:flex justify-center">
          <div className="order-2 ">
            <img
              src={technologies.images.portrait}
              alt={technologies.name}
              className="w-full"
            />
          </div>
          <div className="md:flex items-center ">
            <div className="flex md:flex-col gap-8 justify-center  md:justify-start mt-6">
              <div
                onClick={handleIndex0}
                className={`size-12 border rounded-full p-6 text-2xl flex justify-center items-center text-white ${
                  index == 0 ? "bg-white text-black" : ""
                }`}
              >
                1
              </div>
              <div
                onClick={handleIndex1}
                className={`size-12 border rounded-full p-6 text-2xl flex justify-center items-center text-white ${
                  index == 1 ? "bg-white text-black" : ""
                }`}
              >
                2
              </div>
              <div
                onClick={handleIndex2}
                className={`size-12 border rounded-full p-6 text-2xl flex justify-center items-center text-white ${
                  index == 2 ? "bg-white text-black" : ""
                }`}
              >
                3
              </div>
            </div>
            <div className="text-center md:text-left leading-relaxed  text-white md:max-w-[450px] p-6">
              <p className="text-gray-500">THE TECHNOLOGY...</p>
              <p className="text-white text-3xl md:mt-2">
                {technologies.name.toUpperCase()}
              </p>
              <p className="md:mt-4">{technologies.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Technoloy;

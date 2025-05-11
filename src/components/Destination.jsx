import { useState } from "react";
import data from "./data.json";
import Navbar from "./Navbar";

function Destination() {
  const [index, setIndex] = useState(0);
  const space = data.destinations[index];

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
  console.log(space);
  return (
    <div className="bg-slate-900 bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)] bg-cover bg-no-repeat grid min-h-screen">
      <Navbar />
      <div className="p-6 mt-6 md:mt-12 md:flex justify-center gap-[100px] items-center">
        <div className="">
          <div>
            <h1 className="text-white text-center  mb-6 md:text-left md:text-2xl">
              <span className="text-gray-500 font-mono">01</span> PICK YOUR
              DESTINATION
            </h1>
          </div>
          <div className="md:w-[350px] py-12 ">
            <img
              src={space.images.png}
              alt={space.name}
              className="w-full animate-pulse"
            />
          </div>
        </div>
        <div className="md:max-w-[600px]">
          <div className="flex gap-4 justify-center md:justify-start mb-4 font-mono">
            <div
              onClick={handleIndex0}
              className={`text-white hover:cursor-pointer ${
                index == 0 ? "border-b" : ""
              }`}
            >
              Moon
            </div>
            <div
              onClick={handleIndex1}
              className={`text-white hover:cursor-pointer ${
                index == 1 ? "border-b" : ""
              }`}
            >
              Mars
            </div>
            <div
              onClick={handleIndex2}
              className={`text-white hover:cursor-pointer ${
                index == 2 ? "border-b" : ""
              }`}
            >
              Europa
            </div>
            <div
              onClick={handleIndex3}
              className={`text-white hover:cursor-pointer ${
                index == 3 ? "border-b" : ""
              }`}
            >
              Titan
            </div>
          </div>
          <div className="text-white text-center md:text-left">
            <h2 className="text-6xl py-2 font-mono">
              {space.name.toLocaleUpperCase()}
            </h2>
            <div className="leading-relaxed py-6 font-sans">
              {space.description}
            </div>
            <hr />
            <div className="md:flex gap-8 mt-6 font-mono">
              <div className="my-6 md:my-0 ">
                <span className="text-gray-500">AVG. DISTANCE</span>
                <p className="text-4xl font-semibold">{space.distance}</p>
              </div>
              <div>
                <span className="text-gray-500">EST. TRAVEL TIME</span>
                <p className="text-4xl font-semibold">{space.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination;

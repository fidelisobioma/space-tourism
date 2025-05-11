import Navbar from "./Navbar";

function Home() {
  return (
    <div className="bg-slate-900 bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)] bg-cover bg-no-repeat min-h-screen  pb-3 grid  ">
      <Navbar />
      <div className=" md:flex justify-center items-center lg:py-24 gap-[100px]">
        <div className=" p-6 text-white text-center lg:text-left md:max-w-[600px]">
          <p className="md:text-2xl text-gray-100">SO, YOU WANT TO TRAVEL TO</p>
          <p className="text-6xl  py-8">Space</p>
          <p className=" md:leading-relaxed text-gray-100">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <div className="mt-12 md:mt-0 relative grid place-items-center">
            <div className="relative z-10 size-[150px] rounded-full bg-white hover:cursor-pointer p-6 flex items-center justify-center m-auto text-2xl">
              Explore
            </div>
            <div className="motion-safe:animate-pulse shadow-rs size-[150px] rounded-full bg-white absolute "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

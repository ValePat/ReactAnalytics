import { ReactTyped } from "react-typed";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white flex items-center justify-center mt-[-96px] h-screen">
      <Element name="Home" className='element'/>
      <div className="max-w-[80%] w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase font-semibold md:text-2xl md:p-2">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold p-2">
          Grow with data.
        </h1>
        <div className="flex justify-center m-0 p-0">
        <p className="text-[#ffffff] font-light md:text-4xl md:p-4">
          Fast, flexible financing for
        </p>
          <ReactTyped
            className="text-[#ffffff] font-semibold md:text-4xl md:p-4 md:pl-0 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:max-w-[100%] md:mx-auto text-xl font-bold text-gray-500 py-4'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

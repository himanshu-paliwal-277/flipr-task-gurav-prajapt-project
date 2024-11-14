import React from "react";
import shape1 from "../assets/Client-First-IMAGES/shape-1.svg";
import shape from "../assets/Client-First-IMAGES/shape.svg";
function Section1() {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
  {/* Shape Images */}
<div className="flex justify-center sm:justify-start lg:justify-start sm:pl-10 lg:pl-24">
  <img 
    src={shape} 
    alt="Shape" 
  />
  <img 
    src={shape1} 
    alt="Shape 1" 
    className="ml-4"
  />
</div>
  {/* Content Section */}
  <div className="bg-backgroundSoft p-6 sm:p-10 shadow-md flex flex-col md:flex-row justify-between items-start w-full max-w-5xl mt-6 gap-6">
    {/* About Us Section */}
    <div className="md:w-1/2">
      <h2 className="text-gray-500 text-sm font-bold mb-2">ABOUT US</h2>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        We are a community of content writers who share their learnings
      </h1>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-purple-600 font-bold">
        Read More
      </a>
    </div>

    {/* Our Mission Section */}
    <div className="md:w-1/2">
      <h2 className="text-gray-500 text-sm font-bold mb-2">OUR MISSION</h2>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        Creating valuable content for creatives all around the world
      </h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default Section1;

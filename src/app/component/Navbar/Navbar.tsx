import React from "react";
import Image from "next/image";
import { BiMobile } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className=" flex-col items-center  h-auto lg:w-full lg:flex-row  border border-gray-100 p-6 bg-blue-950 opacity-120  mt-0 ">
      <header className= " lg:flex-row justify-center items-center mb-3 lg:mb-o  text-gray-100">
        <div>
          <div className=" flex lg:mt-0 items-center lg:flex-row lg:justify-between lg:items-center  mt-0 border-b border-gray-500 bodder-opacity-89 mb-6 bg-blue-950 opacity-120">
            
              <BiMobile className="bg-red-900 opacity-80 ml-32" />
            
            <h3 className="  lg:pl-0 space-x-3  lg:mr-48 text-center mb-2">Download App Via SMS</h3>
            <div className="flex justify-end">
              <h3 className="lg:ml-64 lg:pl-60  lg:mr-1  lg:mt-0text-center  text-red-600">اُردو </h3>
              <button className="lg:ml-85 lg:pl-5 text-center lg:text-end border-l-2 border-gray-500 border-opacity-89 space-x-2">
                Sign In
              </button>
              <button className=" text-center lg-text-end mr-8 pl-4  ml-3 border-l-2 border-gray-500 border-opacity-89  ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div  >
          <nav >
            <ul  className="ml-20  space-y-2 w-auto h-auto lg:w-full lg:flex lg:justify-evenly lg:space-y-3">
              <Image
                src={"/logo.png"}
                width={150}
                height={150}
                alt="logo image"
                className="bg-gray-800 opacity-60"
              />
              <li>UsedCars</li>
              <li>NewCars</li>
              <li>Bikes</li>
              <li>AutoStore</li>
              <li>Vedeos</li>
              <li>Forms</li>
              <li>Blogs</li>
              <li>More</li>
              <button className="py-2 px-8 bg-red-800  border-blue-950-rounded-x1">
                Post an Ad
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

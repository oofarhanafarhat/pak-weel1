import React from "react";
import Image from "next/image";
import Link from "next/link";

const Car1 = () => {
  return (
    <div className="justify-center flex bg-gray-100">
      <div className="lg:flex lg:flex-col  lg:justify-center lg:items-center lg:max-w-[800px] bg-gray-100 space-y-4 text-blue-950">
        <h1 className="text-blue-950 text-xl lg:text-3xl font-bold text-center  underline " >
          Toyta Carolla 2024 Price In Pakistan, Images,Reviews & Specs
        </h1>
        <Image src={"/corolla.jpg"} width={300} height={300} alt="carolla" className="md:ml-40 lg:ml-0" />
        <div className=" lg:flex-row space-x-4 space-y-3 text-blue-700">
          <Link href="/"><button className="bg-blue-700 text-white  p-3 boder-2 border-gray-300 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
              back to home
            </button>
          </Link>
          <button className="bg-white px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
            Request Bank Finance
          </button>
          <button className="bg-white px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
            Visit Place
          </button>
          <button className="bg-white px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
            Car inspection
          </button>
        </div>
        <h1 className="text-lg font-semibold text-blue-950 text-center">Vehicle Description</h1>
        <p className="text-blue-950 px-10 font-semibold">
          <b> Number of door </b> 4 <b> Engine </b> 1800 CC <b> Condition </b> 8.5/10
          <b>  Driven </b> 9.500 km <b> Suspension Type </b> Soft suspension
          <b> Avg </b> 13 km per hr <b>Transmission </b> Automatic <b>Fuel Type</b>
          High Octane
        </p>
        <h1 className="text-green-400 font-bold ml-24  md:ml-40 lg:ml-0 pb-5">PKR 50,00,000</h1>
        <Link href="/login">
          <button className=" ml-20 md:ml-40 lg:ml-0 bg-blue-700 text-white mb-10 px-6 py-3 border-4 border-gray-600 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Car1;
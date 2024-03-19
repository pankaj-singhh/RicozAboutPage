import React from "react";

const Hiring = () => {
  return (
    <div className="bg-pink-600 mt-5 lg:mt-10 pt-10 text-white">
      <div className="text-3xl lg:text-5xl flex  justify-center text-white">
        <h1 className="font-bold">We Are Hiring!</h1>
      </div>
      <div className="flex flex-col items-center justify-center pl-3">
        <p className="font-bold mt-10 ">
          Join Our Growing Family: Explore Exciting Career Opportunities at NAME
        </p>
        <p className="lg:text-lg w-[60vw] mt-5 lg:10">
          At NAME, we believe that our success stems from the exceptional
          individuals who make up our team. As we continue to expand and
          innovate, we're looking for talented professionals who share our
          passion for transforming spaces and enriching lives.
        </p>
      </div>
         <div className="pb-10 mt-5">
      <div className="ml-3">
        <div className="text-lg">
          <p className="font-bold">Sales Executive</p>
        </div>
        <div className="flex lg:relative">
          <p>Location- Hybrid, 0-3 Yrs of Experience</p>
         
            <button className="w-[160px] h-[35px] lg:absolute lg:right-0 border-white border-[3px] pb-1 rounded-md mt-12 mr-5 lg:mt-0 hover:bg-blue-500 ">
              Apply
            </button>
        
        </div>
        <div className="  w-[96vw] h-[5px] bg-white border rounded-xl lg:ml-3 mt-5 lg:mt-10 hover:bg-blue-300"></div>
      </div>
      <div className="ml-3 mt-5">
        <div className="text-lg">
          <p className="font-bold">Creative Stratergist</p>
        </div>
        <div className="flex lg:relative ">
          <p>Location- Delhi, 0-6 Yrs of Experience</p>
          
            <button className="w-[160px] h-[35px] lg:absolute lg:right-0 border-white border-[3px] pb-1 rounded-md mt-12 mr-5 lg:mt-0 hover:bg-blue-500 ">
              Apply
            </button>
          
        </div>
        <div className="  w-[96vw] h-[5px] bg-white border rounded-xl lg:ml-3 mt-5 lg:mt-10 hover:bg-blue-300"></div>
      </div>
      <div className="ml-3 mt-5">
        <div className="text-lg">
          <p className="font-bold">Sales Executive</p>
        </div>
        <div className="flex lg:relative ">
          <p>Location- Work from Home , Duration- 3 months</p>
        
            <button className="w-[160px] h-[35px] lg:absolute lg:right-0 border-white border-[3px] pb-1 rounded-md mt-12 mr-5 lg:mt-0 hover:bg-blue-500  ">
              Apply
            </button>
        
        </div>
        <div className="  w-[96vw] h-[5px] bg-white border rounded-xl lg:ml-3 mt-5 lg:mt-10 hover:bg-blue-300 "></div>
      </div>
      </div>
    </div>
  );
};

export default Hiring;

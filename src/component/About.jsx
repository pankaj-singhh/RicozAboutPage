import React from "react";

const About = () => {
  return (
    <div className="     ">
      <div className=" ">{/* for about us text */}
        <div className=" bg-pink-600 text-xl lg:w-[57.4vw] ">
          <p className="font-bold pl-5 lg:text-white">Logo</p>
        </div>
        <div className="text-center bg-pink-600 text-4xl lg:w-[57.4vw]  ">
          <h1 className="font-bold text-white">About Us</h1>
        </div>
        <div className="lg:flex lg:flex-row-reverse">
          
          {/* for graph */}
          <div className="lg:w-[52vw] ">
            <img className="lg:h-[400px] w-[900px]" src="./Images/graph.svg" alt="Graph" />
          </div>
        
        {/* for graph  end*/}
        <div className="max-h-auto lg:w-[70vw] lg:h-[60vh]  bg-pink-600  rounded-lg lg:rounded-none   ">
          <div className=" w-[90vw] ml-5 lg:w-[45vw] h-[55vh] mt-1 lg:ml-16">
          <p className="text-white pt-1 lg:pt-10 lg:text-base ">
            NAME is a leading provider of comprehensive construction and
            renovation services, dedicated to delivering top-quality solutions
            for homes and businesses. With a commitment to excellence,
            innovation, and customer satisfaction, NAME has established itself
            as a trusted name in the industry. <br /> 
            <br />
            NAME is more than just a construction and renovation company; we are
            your partners in creating spaces that inspire and reflect your
            vision. Whether it's transforming your home or upgrading your
            business premises, our team is committed to providing unmatched
            craftsmanship and exceptional results. Contact us today and
            experience the NAME difference in construction and renovation
            services. Let us bring your dreams to life with skill, passion, and
            dedication.
          </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

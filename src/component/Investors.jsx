import React from 'react'

const Investors = () => {
  return (
    <div>
         <div className=" text-5xl text-center lg:mr-9 mt-5 ">
        <h1 className="font-bold"> Investors</h1>
      </div>
      {/**for flex */}
      <div className="lg:flex lg:flex-row-reverse  mt-5">
       
          <div className="flex items-center justify-center lg:mr-52 lg:pt-16">
            <img
              className="w-[400px] rounded-xl lg:h-[60vh]  "
              src="./Images/investorimg.svg"
              alt="Photo"
            />
           
          </div>
         
        
        <div className="w-[80vw] md:w-[60vw] lg:w-[45vw] mt-5 ml-10 lg:mr-40  md:text-sm lg:text-lg">
          <p>
          Welcome to NAME Investor Relations hub. We appreciate your interest in being a part of our journey towards innovation, growth, and excellence. Here, you'll find the information you need to understand our company's vision, performance, and opportunities for collaboration.
          </p>
          <p className="text-lg font-bold mt-5">Investment Opportunities:</p>
          <p className="mt-3 ">
          We invite you to explore the potential of partnering with NAME. By investing in us, you're investing in a future where creativity, innovation, and client-centric solutions converge to create remarkable spaces and lasting value.
           For more information, financial reports, and inquiries about investment opportunities, please contact our Investor Relations team. Join us in shaping the future of NAME and the industries we influence. Your partnership matters, and together, we'll redefine what's possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Investors
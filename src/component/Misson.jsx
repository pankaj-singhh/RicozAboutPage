import React from "react";

const Misson = () => {
  return (
    <div>
      <div className="font-bold text-5xl text-center lg:mr-96 mt-5 ">
        <h1 className="lg:pr-60"> Our Mission</h1>
      </div>
      {/**for flex */}
      <div className="lg:flex lg:flex-row-reverse  mt-5">
        <div className=" lg:mr-36 ">
          <div className="lg:flex ">
            <img
              className="w-[300px] pl-10 lg:mt-2 rounded-xl lg:h-[30vh]"
              src="./Images/missionimg1.jpg"
              alt="Photo"
            />
            <img
              className="w-[300px] pl-10 mt-2 rounded-xl lg:h-[30vh]"
              src="./Images/missionimg2.jpg"
              alt=""
            />
          </div>
          <div className="  lg:flex hidden lg:hidden-none">
            <img
              className="w-[300px] pt-2 pl-10 rounded-xl lg:h-[30vh] "
              src="./Images/missionimg3.jpg "
              alt="photo"
            />
            <img
              className="w-[300px] pt-2 pl-10 rounded-xl lg:h-[30vh]"
              src="./Images/missionimg4.jpg"
              alt="photo"
            />
          </div>
        </div>
        <div className="w-[80vw] md:w-[60] lg:w-[40vw] mt-5 ml-10 lg:mr-32  md:text-sm lg:text-lg">
          <p>
            At NAME, our mission is to transform ordinary spaces into
            extraordinary experiences. We are driven by the belief that the
            environments we inhabit profoundly impact our lives. With this
            guiding principle, we dedicate ourselves to delivering exceptional
            craftsmanship, innovative solutions, and unmatched expertise in
            every project we undertake.
          </p>
          <p className="text-lg font-bold mt-5">Why We Do What We Do:</p>
          <p className="mt-3 ">
            We are driven by the belief that every space has the potential to
            inspire, comfort, and transform lives. Whether it's a cozy home, a
            vibrant commercial space, or a serene outdoor retreat, our mission
            is to create environments that resonate with your aspirations,
            emotions, and dreams. Together, let's embark on a journey of
            creativity, innovation, and collaboration. Join us in turning spaces
            into stories, and stories into cherished memories. At NAME, we don't
            just paint walls; we create experiences that enrich lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Misson;

import React from 'react'

const OurTeam = () => {
  return (
    <div className='bg-pink-600 text-white mt-16'>
        <div className='text-5xl flex item-center justify-center'>
            <h1 className='font-bold pt-5'>Meet Our Team</h1>
        </div>
        <div className='flex item-center justify-center mt-10'>
            <p className='w-[60vw] lg:text-xl'>
            At NAME, our team is the heartbeat of our success. Comprising individuals with diverse skills, experiences, and a shared passion for excellence, we're a close-knit family dedicated to transforming spaces and enriching lives. Allow us to introduce you to the faces behind the magic:
            </p>
        </div>
        <div className='mt-10 lg:mt-16  lg:flex lg:item-center lg:justify-center lg:pb-5'>
            <div className=' flex flex-col items-center justify-center lg:mr-10'> 
                <img src="./Images/teamimg1.svg" alt="TeamMenber IMG" />
                <p className='font-bold'>Name</p>
                <p>Position</p>
            </div>
            <div className=' flex flex-col mt-5 lg:mt-0 items-center justify-center lg:mr-10 '>
                <img src="./Images/teamimg2.svg" alt="TeamMenber IMG" />
                <p className='font-bold'>Name</p>
                <p>Position</p>
            </div>
            <div className=' flex flex-col mt-5 lg:mt-0 items-center justify-center mr-10'>
                <img src="./Images/teamimg3.svg" alt="TeamMenber IMG" />
                <p className='font-bold'>Name</p>
                <p>Position</p>
            </div>
            <div className=' flex flex-col mt-5 lg:mt-0 items-center justify-center mr-10'>
                <img src="./Images/teamimg4.svg" alt="TeamMenber IMG" />
                <p className='font-bold'>Name</p>
                <p>Position</p>
            </div>
        </div>

    </div>
  )
}

export default OurTeam
import React from 'react'
import bg from '../images/slider_bg.svg'
import logo from '../images/gblogo.png'
import im2 from '../images/slider_images2.png'
const Slide2 = () => {

  return (
    <div >  
    <div className='relative '>
        <img src={bg} alt='background' className='h-[48rem]' 
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }} ></img>
    <div className='grid grid-cols-2'>
        <div>
        <img src={logo} alt='logo' className='ml-4 mt-4'></img>
        </div>
        <div className='text-right'>
            <button className='px-6 py-2 bg-white mt-6 mr-8 text-blue-500 font-semibold rounded-lg'>Olympiad 2022</button>
        </div>
        </div>
    <div className='relative '>
    <img src={im2} alt='background' className='h-[34rem] mt-56' 
        style={{
            position: "absolute",
            left: "80%",
            top:"80%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }} ></img>
        </div>
       <h1 className='text-white text-6xl font-bold italic ml-28 mt-6'>An exclusive curriculum open</h1>   
       <p className='text-white text-5xl mt-4  ml-28 italic'>for a limited few seats</p>
       <p className='text-white mt-10  ml-28 font-semibold text-2xl'>Register in our 2022 Olympiad to participate in the evaluation <p>process
top 100 students get a 100% scholarship worth INR 1.8 Crore</p></p>
            <button className='px-8 py-4 bg-white mt-8 ml-28 text-blue-600 font-semibold rounded-lg'>APPLY NOW</button>           
    </div>
    <div className='bg-amber-600 mt-32 text-center mx-auto justify-center'>
        <p className='text-white text-2xl py-2 '>At GravityBrain, our mission is to make children ready for 2030 when book-knowledge just won't be enough</p>
        <p className='text-white text-3xl py-6 pb-10 flex mx-auto font-bold justify-center' >"Education is not the learning of facts, but the training of the mind to think" <p className='text-xl mt-2'>Albert Einstein</p></p>
    </div>
    </div>
    
  )
}

export default Slide2
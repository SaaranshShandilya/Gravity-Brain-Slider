import React from 'react';
import Slide1 from './Slide1.js';
import Slide2 from './Slide2.js';



 import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
const slides=[Slide1, Slide2]

let count = 0;
const Slider = () => {

    const slideRef = React.useRef();

    React.useEffect(()=>{
        startSlider();
        slideRef.current.addEventListener("animationend", removeAnimation);
    },[]);

    const startSlider = () => { //is used to start the slider automatically
        
    }

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleNext = () => {
        count = (count + 1) % slides.length;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
    }
    const handlePrevious = () => {
        count = (currentIndex + slides.length - 1) % slides.length;
        setCurrentIndex(count)
        slideRef.current.classList.add("fade-anim");
    }
    console.log(currentIndex)
  return (
    <div className="" ref={slideRef}>
        {currentIndex ?(
            <Slide1/>
        ):(<Slide2/>)

        }
      
        
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
        <button className="text-4xl bg-white px-4 py-4 rounded-lg ml-4" onClick={handlePrevious}><AiOutlineArrowLeft></AiOutlineArrowLeft></button>
        <button className="text-4xl bg-white px-4 py-4 rounded-lg" onClick={handleNext}><AiOutlineArrowRight></AiOutlineArrowRight></button>
      </div>
    
  </div>
  );
};

export default Slider;

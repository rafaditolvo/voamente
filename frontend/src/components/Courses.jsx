import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full bg-[#a43494] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Nossos <span className='text-[#fff]'>Serviços</span></h1>
              <p className='text-[#ffff]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            
            <Slider {...settings} className='px-5'>
              {courses.map((course,i)=>
                <div key={i}>
                  <Card course={course} />
                </div> ) }
              

            </Slider>
            
        </div>

    </div>
  )
}

export default Courses
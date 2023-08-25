import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carosel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-[1400px] h-[740px] w-full m-auto relative bg-black '>
        <h2 className='text-white'> Responsive </h2>
        <Slider {...settings}>
          <div className='card'>
            <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
          <div className='card' >
            <h3>2</h3>
          </div>
          <div className='card'>
            <h3>3</h3>
          </div>
          <div className='card'> 
            <h3>4</h3>
          </div>
          <div className='card'>
            <h3>5</h3>
          </div>
          <div className='card'>
            <h3>6</h3>
          </div>
          <div className='card'>
            <h3>7</h3>
          </div>
          <div >
            <h3>8</h3>
          </div>
        </Slider>
      </div>
  )
}

export default Carosel
import React from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../screens/carousel.css'
const Card = () => {
  return (
    <div className="flex">
      <div>
        <div className="pl-20 py-10 flex items-center pr-28 text-xl leading-tight text-gray-600 font-bold uppercase">
          Top Trale Deals
        </div>
      </div>
      <Carousel
        additionalTransfrom={0}
        autoPlay
        arrows="none"
        autoPlaySpeed={2000}
        centerMode={false}
        className="react-multiple-carousel__arrow--right::before"
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        <div className="h-32 w-64 bg-hero-pattern"></div>
        <div className="h-32 w-64 bg-hero-pattern"></div>
        <div className="h-32 w-64 bg-hero-pattern"></div>
        <div className="h-32 w-64 bg-hero-pattern"></div>
        <div className="h-32 w-64 bg-hero-pattern"></div>
        <div className="h-32 w-64 bg-hero-pattern"></div>
      </Carousel>
    </div>
  )
}

export default Card

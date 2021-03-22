import React from 'react'
import './carousel.css'
import Card from '../components/Card'

const HomeScreen = () => {
  return (
    <>
      {/* Hero component on the Home Screen */}

      <div class=" grid grid-cols-1 sm:grid-cols-2  ">
        <div class="w-full ">
          <div class="bg-gray-200 h-110 py-16 pl-10 pr-2   xl:pl-24 xl:pr-36 ">
            <h2 className="text-5xl md:text-6xl text-gray-700 font-bold ">
              Your one-stop store for all your travel needs.
            </h2>
            <p className="text-sm font-medium mt-4 mb-5">
              At travelbeta store,you will be provided with all your itinery for
              your travel needs Start shopping
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded-r text-white p-3 pl-10 pr-10">
              <p className="font-semibold text-xs">Sign Up</p>
            </button>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-blue-500 h-110">
            <div class="carousel relative shadow-2xl bg-white">
              <div class="carousel-inner relative overflow-hidden w-full">
                {/* <!--Slide 1--></div> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-1"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"
                  checked="checked"></input>
                <div class=" h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-blue-500 text-white text-5xl text-center">
                    <img
                      className="h-104 w-auto "
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335588/hOODIE-1_1_1_a5r3ra.png"
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-3"
                  class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200  leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-2"
                  class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!--Slide 2--> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-2"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"></input>
                <div class="h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-blue-500 text-white text-5xl text-center">
                    <img
                      className="h-104 w-auto "
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335169/towel_rvxuyz.png"
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-1"
                  class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-3"
                  class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!--Slide 3--> */}
                <input
                  class="carousel-open"
                  type="radio"
                  id="carousel-3"
                  name="carousel"
                  aria-hidden="true"
                  hidden="true"></input>
                <div class="h-110 carousel-item absolute opacity-0">
                  <div class="block flex items-center justify-center h-full w-full bg-blue-500 text-white text-5xl text-center">
                    <img
                      src="https://res.cloudinary.com/dqetx7bes/image/upload/v1616335168/Group_1_261_xuljug.png"
                      className="h-104 w-auto "
                      alt=""
                    />
                  </div>
                </div>
                <label
                  for="carousel-2"
                  class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200  leading-tight text-center z-10 inset-y-0 left-0 my-auto">
                  <i class="fas fa-caret-left"></i>
                </label>
                <label
                  for="carousel-1"
                  class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-gray-200 leading-tight text-center z-10 inset-y-0 right-0 my-auto">
                  <i class="fas fa-caret-right"></i>
                </label>
                {/* <!-- Add additional indicators for each slide--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End of Hero component on the Home Screen */}
      <div className="">
        <Card />
      </div>
    </>
  )
}

export default HomeScreen

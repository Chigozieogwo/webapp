import React from 'react'
import { Link } from 'react-router-dom'
const Header2 = () => {
  return (
    <div>
      <div className="flex items-center   bg-white ">
        <div className=" md:w-1/6 sm:w-1/6 px-2">
          <div className=" h-12  flex items-center justify-center">
            <Link
              className="text-blue-700 sm:text-sm   font-bold uppercase  py-4 px-2"
              to="/">
              Travelbeta Store
            </Link>
          </div>
        </div>
        <div className=" md:w-1/6  px-2 ">
          <div className="h-12 text-sm  flex items-center justify-center">
            <div className="flex justify-between items-center">
              <div className="flex justify-start">
                <Link
                  to="/Merch"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  Merch
                </Link>
                <Link
                  to="/Accessories"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:w-1/2 lg:pl-16  sm:pl-2 md:pl-8 ">
          <div>
            <span className="w-auto flex justify-end items-center md:hidden   text-gray-500 pl-2">
              <i className="fas fa-search "></i>
            </span>
          </div>
          <div className="h-12 text-sm mt-3  text-grey-dark ">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <div className="bg-white shadow rounded flex">
                <span className="w-auto bg-gray-100 flex justify-end items-center   text-gray-500 pl-2">
                  <i className="fas fa-search "></i>
                </span>
                <input
                  className="py-2 w-full text-sm text-white bg-gray-100 rounded-l pl-2 focus:outline-none focus:bg-white focus:text-gray-700"
                  type="text"
                  placeholder="Search products,brand and Category"></input>
                <button className="bg-yellow-400 hover:bg-yellow-500 rounded-r text-white p-2 pl-6 pr-6">
                  <p className="font-semibold text-xs">Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/6  px-2 ">
          <div className="h-12 text-sm text-grey-dark flex items-center justify-center">
            <div>
              <Link
                to="/Login"
                className="py-2 lg:px-6 md:mx-2 text-gray-600 text-center border border-solid border-gray-600 rounded hover:bg-yellow-500 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                Login
              </Link>
              <Link
                to="/Cart"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
                <i className="fas fa-cart-plus mr-2"></i>Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2

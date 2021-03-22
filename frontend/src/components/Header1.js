import React from 'react'
import { Link } from 'react-router-dom'

const Header1 = () => {
  return (
    <>
      <div className="flex justify-around w-full h-16 bg-indigo-200 items-center">
        <div>
          <Link className="text-blue-700 font-bold uppercase  py-3 px-2" to="/">
            Travelbeta Store
          </Link>
        </div>
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
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <div class="bg-white shadow rounded flex">
            <span className="w-auto flex justify-end items-center   text-gray-500 pl-2">
              <i className="fas fa-search "></i>
            </span>
            <input
              className="py-2 w-full text-sm text-white bg-gray-100 rounded-l pl-2 focus:outline-none focus:bg-white focus:text-gray-700"
              type="text"
              placeholder="Search by brands"></input>
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded-r text-white p-2 pl-6 pr-6">
              <p className="font-semibold text-xs">Search</p>
            </button>
          </div>
        </div>

        <div>
          <Link
            to="/Login"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 text-center border border-solid border-gray-600 rounded hover:bg-yellow-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
            Login
          </Link>
          <Link
            to="/Cart"
            className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
            <i className="fas fa-cart-plus"></i>Cart
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header1

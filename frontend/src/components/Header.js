import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex w-full h-16 bg-indigo-200 items-center">
      <div>
        <Link
          className="text-blue-700 font-bold uppercase ml-10 py-3 px-2"
          to="/">
          Travelbeta
        </Link>
      </div>
      <div className="flex justify-evenly items-center ml-16">
        <div className="flex justify-evenly items-center">
          <div>
            <Link
              to="/Merch"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              Merch
            </Link>
          </div>
          <div>
            <Link
              to="/Accessories"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              Accessories
            </Link>
          </div>
        </div>

        <div class="bg-white shadow p-4 flex">
          <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <i class="material-icons text-3xl">search</i>
          </span>
          <input
            class="w-full rounded p-2"
            type="text"
            placeholder="Try 'Los Angeles'"></input>
          <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
            <p class="font-semibold text-xs">Search</p>
          </button>
        </div>
      </div>
      <div>
        <button className="bg-white outline-black">Login</button>
        <button className="hover:bg-yellow-200 p-2 rounded "></button>
        <Link
          to="/Login"
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
          Login
        </Link>
        <Link
          to="/Cart"
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
          <i className="fas fa-lock mr-2"></i>Cart
        </Link>
      </div>
    </div>
  )
}

export default Header

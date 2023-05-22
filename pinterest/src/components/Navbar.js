
import React from 'react';
import { FaPinterest } from 'react-icons/fa';



const Navbar = () =>{
    return (
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0  hover:bg-gray-300">
                <FaPinterest className="text-red-600 h-6 w-6" />
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <div><a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-full text-sm font-medium  hover:bg-gray-300"
                    >
                      Home
                    </a>
                    <input
                    type="text"
                     placeholder="Search"
                           className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full w-40 sm:w-80"
                    />
                    </div>
                    
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-full text-sm font-medium  hover:bg-gray-300"
                    >
                      Following
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-full text-sm font-medium  hover:bg-gray-300"
                    >
                      Popular
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    };
export default Navbar;
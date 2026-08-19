import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">
          Hello, Alex <br/>
          <span className="text-xl font-medium text-gray-500">Here's your board.</span>
        </h1>
        <button 
          
          className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
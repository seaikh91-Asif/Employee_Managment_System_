import React from 'react'

const TaskList = () => {
  return (
    <div>
         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6 block">
        
        <div className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 break-inside-avoid">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Active</span>
            <span className="text-sm font-medium text-gray-500">Due: Oct 24</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Build Authentication UI</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Create the login screen and ensure it properly links up with the React Context API for global state management.
          </p>
          <div className="flex gap-2 w-full">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full text-sm transition-colors">
              Complete
            </button>
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full text-sm transition-colors">
              Fail
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 break-inside-avoid">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
            <span className="text-sm font-medium text-gray-500">Due: Oct 28</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Design Database Schema</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Outline the collections needed for users, tasks, and company settings in MongoDB.
          </p>
          <button className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 rounded-full text-sm transition-colors">
            Accept Task
          </button>
        </div>

      </div>
    </div>
  )
}

export default TaskList
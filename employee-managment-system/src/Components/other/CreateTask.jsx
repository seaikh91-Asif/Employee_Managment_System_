import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Admin Workspace</h1>
        <button 
        
          className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Log out
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Create a Task</h2>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 ml-1 mb-2">Task Title</label>
              <input type="text" placeholder="Add a title" className="w-full px-5 py-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-gray-300" required />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 ml-1 mb-2">Description</label>
              <textarea placeholder="Tell everyone what this task is about..." rows="4" className="w-full px-5 py-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-gray-300 resize-none" required></textarea>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 ml-1 mb-2">Assign To</label>
                <select className="w-full px-5 py-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-gray-300 appearance-none" required>
                  <option value="">Select Employee</option>
                  <option value="alex">Alex</option>
                  <option value="sarah">Sarah</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 ml-1 mb-2">Due Date</label>
                <input type="date" className="w-full px-5 py-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-gray-300 text-gray-600" required />
              </div>
            </div>

            <button type="submit" className="mt-4 bg-[#E60023] hover:bg-[#ad081b] text-white font-semibold py-4 rounded-full transition-colors">
              Publish Task
            </button>
          </form>
        </div>

        <div className="bg-white p-8  rounded-4xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Task Overview</h2>
          <div className="space-y-4 overflow-y-auto pr-2" style={{ maxHeight: '600px' }}>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="font-bold text-gray-900">Design Database Schema</h3>
                <p className="text-sm text-gray-500 mt-1">Assigned to: <span className="font-medium text-gray-800">Sarah</span></p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-2 rounded-full">In Progress</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <h3 className="font-bold text-gray-900">Build Authentication UI</h3>
                <p className="text-sm text-gray-500 mt-1">Assigned to: <span className="font-medium text-gray-800">Alex</span></p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-4 py-2 rounded-full">Completed</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateTask
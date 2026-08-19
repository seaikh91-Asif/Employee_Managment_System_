import React from 'react'

const TaskListNumber = () => {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
        <div className="bg-blue-100 p-6 rounded-3xl flex flex-col justify-center items-start">
          <span className="text-4xl font-bold text-blue-900">3</span>
          <h3 className="text-lg font-medium text-blue-800">New Tasks</h3>
        </div>
        <div className="bg-yellow-100 p-6 rounded-3xl flex flex-col justify-center items-start">
          <span className="text-4xl font-bold text-yellow-900">2</span>
          <h3 className="text-lg font-medium text-yellow-800">Active</h3>
        </div>
        <div className="bg-green-100 p-6 rounded-3xl flex flex-col justify-center items-start">
          <span className="text-4xl font-bold text-green-900">12</span>
          <h3 className="text-lg font-medium text-green-800">Completed</h3>
        </div>
        <div className="bg-red-100 p-6 rounded-3xl flex flex-col justify-center items-start">
          <span className="text-4xl font-bold text-red-900">1</span>
          <h3 className="text-lg font-medium text-red-800">Failed</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber
import React from 'react'
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
        <Header/>
        <TaskListNumber/>
        <TaskList/>
     
    </div>
  );
}

export default EmployeeDashboard
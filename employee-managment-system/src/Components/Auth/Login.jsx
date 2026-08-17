import React from 'react'

const Login = () => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded-4xl shadow-sm max-w-sm w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Welcome</h1>
        
        <form  className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full px-5 py-4 bg-gray-100 rounded-2xl border-none focus:ring-2 focus:ring-gray-300 outline-none text-gray-800 placeholder-gray-500"
            required
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-5 py-4 bg-gray-100 rounded-2xl border-none focus:ring-2 focus:ring-gray-300 outline-none text-gray-800 placeholder-gray-500"  
            required
          />
          
          <button type="submit" className="w-full mt-4 bg-[#E60023] hover:bg-[#ad081b] text-white font-semibold py-4 rounded-full transition-colors duration-200">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
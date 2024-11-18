import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='bg-gray-300 w-full  h-screen  flex flex-col justify-center items-center'>
            <h1 className='mb-10 text-3xl font-bold text-blue-950'>Sign Up</h1>
            <form className='w-[380px] '>
                <label>
                    Name:
                    <br />
                    <input className='w-full rounded-md h-8' type="text" />
                </label>
                <label>
                    Email:
                    <br />
                    <input className='w-full rounded-md h-8' type="text" />
                </label>
                <label>
                    Password:
                    <br />
                    <input className='w-full rounded-md h-8' type="password" />
                </label>
                <div className="flex gap-4 justify-center items-center mt-10">
                    <button className='bg-orange-400 p-2 w-50 rounded-lg font-bold text-blue-950 hover:text-gray-600 ' type='submit'>SignUp</button>
                    <Link to={"/login"}><span className='text-sm text-black bg-none'>you have already account?</span> <span className='bg-orange-400 p-2 w-50 rounded-lg text-gray-300 hover:text-gray-600 ' >Login</span> </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
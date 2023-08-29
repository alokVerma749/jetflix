import React from 'react'

const LoginForm = () => {
    return (
        <form className="w-96 flex flex-col space-y-4 mx-auto bg-black bg-opacity-70 p-10">
            <span className='text-white font-medium text-3xl'>Sign In</span>
            <input className="h-10 outline-none p-5 bg-gray-700 text-lg font-normal rounded-md" type="text" id="email/phoneNumber" placeholder="Phone no./email" />
            <input className="h-10 outline-none p-5 bg-gray-700 text-lg font-normal rounded-md" type="pasword" id="password" placeholder="Password" />
            <button className="bg-red-600 text-center rounded-md text-white font-bold p-3">Sign In</button>
            <div className='text-white text-base'>
                <span>Rember me</span>
                <span>forgot password</span>
                <p>New to JetFlix? <span>Sign up</span></p>
            </div>
        </form>
    )
}

export default LoginForm
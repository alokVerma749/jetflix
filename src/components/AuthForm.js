import React, { useRef, useState } from 'react'
import checkValidData from '../utils/validate';

const AuthForm = () => {
    const [isSignInPage, setIsSignInPage] = useState(true);
    const [validateError, setValidateError] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleToggle = () => {
        setIsSignInPage(!isSignInPage);
    }
    const handleButtonClick = () => {
        const validateErrorMsg = checkValidData(email.current.value, password.current.value);
        setValidateError(validateErrorMsg);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="w-96 flex flex-col space-y-4 mx-auto bg-black bg-opacity-70 p-10">
            <span className='text-white font-medium text-3xl'>{isSignInPage ? 'Sign In' : 'Sign up'}</span>
            {
                !isSignInPage &&
                <input ref={name} className="h-10 outline-none p-5 bg-gray-700 text-white text-lg font-normal rounded-md" type="text" id="name" placeholder="Name" />
            }
            <input ref={email} className="h-10 outline-none p-5 bg-gray-700 text-white text-lg font-normal rounded-md" type="email" id="email" placeholder="Email" />
            <input ref={password} className="h-10 outline-none p-5 bg-gray-700 text-white text-lg font-normal rounded-md" type="password" id="password" placeholder="Password" />
            {validateError && <p className='text-red-600 '>* {validateError}</p>}
            <button onClick={handleButtonClick} className="bg-red-600 text-center rounded-md text-white font-bold p-3">{isSignInPage ? 'Sign In' : 'Sign up'}</button>
            {
                isSignInPage ?
                    <div className='text-white text-base'>
                        <span>Rember me</span>
                        {isSignInPage && <span>forgot password</span>}
                        <p>New to JetFlix? <span onClick={handleToggle} className='cursor-pointer'>Sign up</span></p>
                    </div> :
                    <div className='text-white text-base'>
                        <p>Already Registered? <span onClick={handleToggle} className='cursor-pointer'>Sign in</span></p>
                    </div>
            }
        </form>
    )
}

export default AuthForm;
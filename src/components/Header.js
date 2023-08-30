import React from 'react'
import { LOGO } from '../utils/constants';

const Header = () => {
    return (
        <header className='relative left-24'>
            <img className='w-48 absolute ' src={LOGO} alt="bg" />
        </header>
    )
}

export default Header;
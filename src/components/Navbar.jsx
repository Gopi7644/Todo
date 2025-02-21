import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-around bg-linear-65 from-purple-500 to-pink-500 text-white p-4 fixed top-0 w-full'>
                <div className='flex gap-30'>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </div>
                <div className='flex gap-8'>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/support">
                        Support
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
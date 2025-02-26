import React from 'react'
import { NavLink } from 'react-router-dom'

const Btn = () => {
    return (
        <>
            <div className='fixed right-10 bottom-20'>
                <NavLink to="/TodoTwo" target="_blank" rel="noopener noreferrer">
                    <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>Next Todo</button>
                </NavLink>
            </div>
        </>
    )
}

export default Btn
import React from 'react'
import { useState } from 'react'
const TodoDateTime = ({setInterval}) => {
    const getTimeDate = () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        setDateTime(`${date} - ${time}`);
    }

    setInterval(() => {
        getTimeDate();
    }, 1000)
    const [dateTime, setDateTime] = useState("");
    return (
        <div>
            <div className='flex justify-center items-center ml-12 '>
                <div className='flex m-2 p-2 w-200 justify-center items-center bg-purple-800 flex-col rounded-lg'>
                    <h1
                        className='text-center m-2 p-2 rounded-lg text-4 font-bold text-white w-100 bg-green-500'
                    >Date -Time</h1>
                    <div className='text-white m-4 p-4 flex gap-2'>
                        <span>{dateTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoDateTime
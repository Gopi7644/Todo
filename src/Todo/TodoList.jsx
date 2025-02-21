import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

const TodoList = ({curTask, handleDeleteTodo, handleCheckedTodo, checked}) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mt-2'>
                <li className='text-left flex relative  bg-white items-center rounded-full taxt-white w-100' >
                    <div className='m-2 p-2 text-green-500'>
                    <span className={checked ? "line-through text-red-500" : "" }>{curTask}</span>
                    </div>
                    <div className='absolute flex  right-3 gap-2 '>
                        <button onClick={() => handleCheckedTodo(curTask)} className='flex bg-green-500 h-10 w-10 rounded-full justify-center items-center text-white'><FaCheck /></button>
                        <button className='flex justify-center items-center bg-red-500 h-10 w-10 rounded-full text-white'
                            onClick={() => handleDeleteTodo(curTask)}
                        ><TiDelete /></button>
                    </div>
                </li>
            </div>
            
        </div>
    )
}

export default TodoList
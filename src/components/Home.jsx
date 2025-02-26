import React from 'react'
import Todo from '../Todo/Todo'
import Btn from '../common/Btn'

const Home = () => {
  return (
    <>
      <div className='bg-[#da4ab8d3] min-h-screen py-10'>
        <div className='mt-16 text-center font-bold'>Welcome to <span className='underline'>Home</span> Page</div>
        <Todo />
        <Btn />
      </div>
    </>
  )
}

export default Home
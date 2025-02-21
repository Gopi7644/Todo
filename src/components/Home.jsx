import React from 'react'
import Todo from '../Todo/Todo'

const Home = () => {
  return (
    <>
      <div className='mt-16 text-center font-bold'>Welcome to <span className='underline'>Home</span> Page</div>
      <Todo />
    </>
  )
}

export default Home
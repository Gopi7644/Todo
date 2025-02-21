import React, { useState } from 'react';

const TodoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState({ id: '', content: '', checked: false });

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddToDo(inputValue);
    setInputValue({ id: '', content: '', checked: false }); // Reset the input value
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <div className='flex justify-center my-10'>
          <div className='w-140 h-15 relative flex'>
            <input
              type="text"
              className='outline-none w-full py-1 px-3 bg-white rounded-l-full'
              placeholder='Write your todo here...'
              value={inputValue.content || ''}
              onChange={(event) => handleInputChange(event.target.value)}
              autoComplete='off'
              name=""
              id=""
            />
            <button
              className='absolute -top-0 -right-20 text-white rounded-r-full outline-none bg-blue-800 px-3 py-1 h-15 mr-0 shrink-0 '>Add Todo
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default TodoForm
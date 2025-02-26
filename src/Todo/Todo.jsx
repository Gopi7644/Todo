import React from 'react'

import { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDateTime from './TodoDateTime';


const storageKey = "todosKey";

const Todo = () => {
    // const [inputValue, setInputValue] = useState('')
    const [task, setTask] = useState(() => {
        const rowTodos = localStorage.getItem(storageKey)
        if (!rowTodos) return [];
        return JSON.parse(rowTodos);
    })



    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        // to check if the input field is empty or not
        if (!content) return;
        // to check if the task already exists or not
        // if (task.includes(inputValue)) return;

        const ifTodoContaintMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContaintMatched) return;


        setTask((prevData) => [...prevData, { id, content, checked }])
    };

    const handleClearAll = () => {
        setTask([])
    }

    // Add data to local storage
    localStorage.setItem(storageKey, JSON.stringify(task))

    // handleDeleteTodo function to delete a specific task
    const handleDeleteTodo = (index) => {
        setTask((prevData) => prevData.filter((_, i) => i !== index));
    }
    // handleCheckTodo function to check a specific task
    const handleCheckedTodo = (index) => {
        setTask((prevData) =>
            prevData.map((task, i) =>
                i === index ? { ...task, checked: !task.checked } : task
            )
        );
    }

    return (
        <section>
            <header>
                <h1 className='text-center mt-10 bg-green-500 mx-90 rounded-4xl text-white text-2xl py-2 font-bold'>Todo List</h1>

                <TodoDateTime setInterval={setInterval} />

            </header>

            <TodoForm onAddToDo={handleFormSubmit} />

            <section>
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <TodoList
                                key={curTask.id}
                                curTask={curTask.content}
                                checked={curTask.checked}
                                handleDeleteTodo={() => handleDeleteTodo(index)} handleCheckedTodo={() => handleCheckedTodo(index)}
                            />
                        )
                    })

                    }
                </ul>
            </section>
            <div className='flex justify-center items-centerm-2 p-2'>
                <button
                    onClick={handleClearAll}
                    className='flex justify-center items-center bg-red-500 h-10 w-20 rounded-lg text-white mb-30'>Clear All
                </button>
            </div>
        </section>
    )
}

export default Todo
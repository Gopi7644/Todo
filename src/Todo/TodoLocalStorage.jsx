import React from 'react'

const storageKey = "todosKey";
export const getLocalStorageTodoData = () => {
    const rowTodos = localStorage.getItem(storageKey)
    if (!rowTodos) return [];
    return JSON.parse(rowTodos);
}

export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(storageKey, JSON.stringify(task))
}



import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todoList = useSelector(state => console.log(state))
  console.log({ todoList })
  return <div>TodoList</div>
}

export default TodoList

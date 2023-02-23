import { createSlice } from '@reduxjs/toolkit'
const initialState= {
  todoList: [{ id: 1, name: 'test' }]
}
export const Todo = createSlice({
  name: 'list',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todoList.push(action.payload)
    }
  }
})

export const { AddTodo } = Todo.actions
export default Todo.reducer

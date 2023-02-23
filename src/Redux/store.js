import { configureStore } from '@reduxjs/toolkit'
import { Todo } from './slice/todoSlice'
export const store = configureStore({
  reducer: {
    list: Todo
  }
})

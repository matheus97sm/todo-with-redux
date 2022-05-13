/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface TodoItem {
  id: string;
  title: string;
}

export interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload as TodoItem);
    },

    removeTodo: (state, action) => {
      const removedTodoArray = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      state.todos = removedTodoArray;
    },

    clearTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, clearTodos, removeTodo } = todoSlicer.actions;

export default todoSlicer.reducer;

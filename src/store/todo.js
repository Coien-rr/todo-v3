import { defineStore } from "pinia";

export const todoStore = defineStore('todos', {
  state: ()=>({
    todos: [
      {
        id: 1,
        text: 'Test get Function',
        isFinished: false
      },
      {
        id: 2,
        text: 'Create TodoApp',
        isFinished: false
      },
      {
        id: 3,
        text: 'Connect CloudFunction',
        isFinished: true
      },
      {
        id: 4,
        text: 'Connect CloudDataBase',
        isFinished: false
      },
      {
        id: 5,
        text: 'Test',
        isFinished: false
      }
    ],
    filter: 'all',
    nextId: 0
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos(state) {
      if (this.filter === 'finished') {
        return this.finishedTodos;
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    addTodoTask(text){
      this.todos.push({text, id: this.nextId++, isFinished: false});
    },
    initialToList(){
      
    }
  }
})
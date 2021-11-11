import { defineStore } from "pinia";
import axios from "axios";
const getTaskAPI = 'https://qcsy9b.fn.thelarkcloud.com/getTaskList';
export const todoStore = defineStore('todos', {
  state: ()=>({
    todos: [],
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

    initialTodoList(){
      this.todos = [];
      axios({
        method: 'post',
        url: getTaskAPI,
      }).then(res => {
        console.log(res.data.todolist);
        let tasklist = res.data.todolist;
        for(let i = 0; i < tasklist.length; i++){
          this.todos.push(tasklist[i]);
        }
        this.nextId = tasklist[tasklist.length-1].id + 1;
        console.log(this.nextId);
      })
    }
  }
})
<template>
  <div class="Todo w-full h-screen pt-28">
    <div class="z-10 w-px-todo-width h-px-todo-height p-5 pl-7 rounded-xl bg-white mx-auto">
      <header class="text-3xl font-semibold mb-5 mt-2">Todo App</header>
      <div class="flex inputFiled">
        <input class="m-auto pl-2 focus:outline-none focus:ring focus:border-blue-300 rounded h-11 w-10/12 border-gray-400 border" type="text" placeholder="Add your new todo!">
        <button class="ml-2 h-11 w-14 bg-green-500 rounded text-2xl text-white"><i class="fas fa-plus"></i></button>
      </div>
      <ul class="todolist mt-5">
        <li v-for="todo in todos" :key="todo.id" class="flex pl-3 my-3 rounded h-10 leading-10 w-full bg-todoitem text-xl"><input type="checkbox" class="appearance-none my-auto mr-3 h-5 w-5 border border-gray-300 rounded-md checked:bg-check bg-16 bg-no-repeat bg-center">{{todo.text}}</li>
      </ul>
      <ul class="donelist mt-5 pt-2 border-dashed border-t-2  border-blue-500">
        <li v-for="todo in todos" :key="todo.id" class="flex pl-3 my-3 rounded h-10 leading-10 w-full bg-todoitem text-xl"><input type="checkbox" class="appearance-none my-auto mr-3 h-5 w-5 border border-gray-300 rounded-md checked:bg-check bg-16 bg-no-repeat bg-center">{{todo.text}}</li>
      </ul>
      <div class="footer flex items-end">
        <span class="text-base font-normal">You have {{todos.length}} pending tasks</span>
        <button class="ml-5 h-10 w-24 bg-red-400">CleanAll</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup(){
    const state = reactive({
      todoList: [
        {
          id: 1,
          text: 'Test get Function'
        },
        {
          id: 2,
          text: 'Create TodoApp'
        },
        {
          id: 3,
          text: 'Connect CloudDataBase'
        }
      ]
    });

    const todos = computed(() => {
      return state.todoList;
    })
    
    return {
      todos
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  .Todo{
    background: linear-gradient(#68EACC 0%, #497BE8 100%);
  }
</style>
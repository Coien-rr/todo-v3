<template>
  <div class="Todo w-full h-screen pt-28">
    <div class="z-10 w-px-todo-width h-px-todo-height p-5 pl-7 rounded-xl bg-white mx-auto">
      <header class="text-3xl font-semibold mb-5 mt-2">Todo App</header>
      <div class="flex inputFiled">
        <input v-model="newTodo" class="m-auto pl-2 focus:outline-none focus:ring focus:border-blue-300 rounded h-11 w-10/12 border-gray-400 border" type="text" placeholder="Add your new todo!">
        <button @click="addTodo(newTodo)" class="ml-2 h-11 w-14 bg-green-500 rounded text-2xl text-white"><i class="fas fa-plus"></i></button>
      </div>
      <ul class="todolist mt-5 h-px-max-height max-h-px-max-height overflow-y-scroll">
        <li v-for="todo in todolist" :key="todo.id" class="flex pl-3 my-3 rounded h-10 leading-10 w-full bg-todoitem text-xl">
          <input type="checkbox" v-model="todo.isFinished" @click="checkClick(todo.id)" class="appearance-none my-auto mr-3 h-5 w-5 border border-gray-300 rounded-md checked:bg-check bg-16 bg-no-repeat bg-center">
          {{todo.text}}
        </li>
      </ul>
      <ul class="donelist mt-5 h-px-max-height max-h-px-max-height overflow-y-scroll border-dashed border-t-2  border-blue-500">
        <li v-for="done in donelist" :key="done.id" class="flex pl-3 my-3 rounded h-10 leading-10 w-full bg-todoitem text-xl bg-gradient-to-r from-done">
          <input type="checkbox" v-model="done.isFinished" @click="checkClick(done.id)" class="appearance-none my-auto mr-3 h-5 w-5 border border-gray-300 rounded-md checked:bg-check checked:border-blue-500 bg-16 bg-no-repeat bg-center">
          {{done.text}}
        </li>
      </ul>
      <div class="footer flex items-center mt-10">
        <span class="text-lg font-medium">You have {{todolist.length}} pending tasks</span>
        <button @click="cleanAll()" class="ml-5 h-10 w-24 rounded-md text-base font-medium text-white bg-red-500">CleanAll</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { todoStore } from '../store/todo';

export default {
  setup(){
    let newTodo = ref('');
    const TaskList = todoStore();
    onMounted(() => {
      TaskList.initialTodoList();
    })
    const todolist = computed(() => {
      return TaskList.unfinishedTodos
    });
    const donelist = computed(() => {
      return TaskList.finishedTodos
    })

    function addTodo(text){
      TaskList.addTodoTask(text);
      newTodo.value = '';
    }

    function cleanAll(){
      // console.log('cleanAll');
      return TaskList.cleanAllTask();
    }

    function checkClick(id){
      return TaskList.changeTodoTask(id);
    }

    return {
      newTodo,
      todolist,
      donelist,
      addTodo,
      cleanAll,
      checkClick
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

  .todolist::-webkit-scrollbar,
  .donelist::-webkit-scrollbar{
    display: none;
  }
</style>
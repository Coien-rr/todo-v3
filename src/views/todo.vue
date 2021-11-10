<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header><h1>待办事项</h1></a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="请输入要代办的事项"
          size="large"
          @search="addTodo"
        >
        <template v-slot:enterButton>
          <a-button>新增</a-button>
        </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card :title="`${index+1}、${item.time}`" v-for="(item, index) in todolist" :key="item.id">
          <template v-slot:extra>
            <a-switch :checked = "item.complete" @change="handleCheck(item, true)" />
          </template>
          {{ item.Todo }}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index+1}、${item.time}`" v-for="(item, index) in donelist" :key="item.id">
          <template v-slot:extra>
            <a-switch :checked = "item.complete" @change="handleCheck(item, false)" />
          </template>
          {{ item.Todo }}
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
import { ref, reactive, onMounted, computed } from 'vue';
const getTodoAPI = 'https://qcsy9b.fn.thelarkcloud.com/getTodoList';
export default {
  setup() {
    const todo = ref('');
    // const time = new Date().getUTCMonth();
    // const time = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    const state = reactive({
      todoList: GetLocalStorageList()
    })
    onMounted(() => {
      // console.log(time);
      // console.log(localStorage.getItem('TodoList'));
      // localStorage.setItem("New Todo", JSON.stringify(state.todoList));
      loading();
    })

    function loading(){
      axios({
        method: 'post',
        url: getTodoAPI,
      }).then(res => listDetail(res.data));
    }

    function listDetail(info){
      // console.log(info);
      let tasklist = GetLocalStorageList();
      tasklist = [];
      for(let i = 0; i < info.todolist.length; ++i){
        tasklist.push(info.todolist[i]);
      }
      // console.log(tasklist);
      localStorage.setItem('TodoList', JSON.stringify(tasklist));
    }

    function GetLocalStorageList(){
      let getLocalStorage = localStorage.getItem("TodoList");
      let listArr;
      if(getLocalStorage == undefined){
        listArr = [];
      } else {
        listArr = JSON.parse(getLocalStorage);
      }
      return listArr;
    }

    const addTodo = (value) => {
      // console.log(value);
      if(!value){
        alert('Please enter todo!');
        return;
      }
      state.todoList.push({
        content: value,
        id: state.todoList.length,
        time: new Date(),
        done: false
      })
      todo.value = ''
    }

    const todolist = computed( () => {
      return state.todoList.filter(item => !item.complete)
    })

    const donelist = computed( () => {
      return state.todoList.filter(item => item.complete)
    })

    const handleCheck = (item, status) => {
      item.complete = status;
    }

    return {
      todo,
      addTodo,
      todolist,
      donelist,
      handleCheck
    }
  }
}
</script>

<style>
   #components-layout-demo-basic {
    height: 844pt;
    width: 390pt;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header h1{
    font-size: 25px;
    font-weight: 500;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    text-align: center;
    color: #fff;
  }

  .title {
    margin: 0;
    padding: 10px;
  }
</style>
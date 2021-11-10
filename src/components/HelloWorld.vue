<template>
  <a-button @click="add" type="primary">
    点我加{{ count }}
  </a-button>
  <a-button @click="add2('a')" type="primary">
    点我加a{{ state.a }}
  </a-button>
  <a-button @click="add2('b')" type="primary">
    点我加b{{ state.b }}
  </a-button>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup(){
      const count = ref(0);
      const state = reactive({
        a: 0,
        b: 0,
      });
      
      const add = () => {
        count.value++;
        console.log('add count!');
      }

      const add2 = (type) => {
        state[type] += 1;
        console.log(`add state[${type}]!`)
      }

      return {
        state, 
        count, 
        add,
        add2
      }
    }
  }
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

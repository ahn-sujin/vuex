<template>
<div id="app">
  Parent counter : {{ $store.state.counter }} <br>
  <button v-on:click = "addCounter">+</button>
  <button v-on:click = "subCounter">-</button>
  <!-- <Child v-bind:num = "counter"></Child> -->
  <Child></Child>
</div>

</template>

<script>
import Child from './components/Child.vue'

export default{
  // data(){
  //   return{
  //     counter: 0
  //   };
  // },
  methods:{
    addCounter(){
      this.$store.state.counter++;
    },
    subCounter(){
      this.$store.state.counter--;
    }
  }, 
  components: {
    'Child' : Child
  }

}

</script>

<style>

</style>

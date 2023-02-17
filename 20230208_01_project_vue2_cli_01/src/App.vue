<template>
  <div id="app">
    <!-- <Content01></Content01> -->
    <router-view></router-view>
    <!-- <Content02test></Content02test> -->
  </div>
</template>

<script>
import Content01 from './components/Content01.vue'
import Content02test from './components/Content02test.vue'
export default {
  components: {
    Content01,
    Content02test
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>

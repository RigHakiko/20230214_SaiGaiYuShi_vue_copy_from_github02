<template>
  <div id="app">
    <!-- <Content01></Content01> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Content01 from './components/Content01.vue'

export default {
  components: {
    Content01
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

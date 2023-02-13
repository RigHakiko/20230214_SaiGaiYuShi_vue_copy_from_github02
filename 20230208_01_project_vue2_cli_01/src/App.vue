<template>
  <div id="app">
    <Content01></Content01>
    <Content01CopyTmp></Content01CopyTmp>
  </div>
</template>

<script>
import Content01 from './components/Content01.vue'
import Content01CopyTmp from './components/Content01 copy.vue'
import axios from 'axios'

export default {
  components: {
    Content01,
    Content01CopyTmp
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

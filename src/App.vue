<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
body {
  background: #F2E9DC;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #595959;
}
.container {
  max-width: 560px;
  margin: 0 auto;
}
form label, form input {
  display: block;
}
form input {
  padding: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
}
button {
  background: #808F85;
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
}
button:hover{
background : #a6a813; 
color: #fffaf3;
}
</style>

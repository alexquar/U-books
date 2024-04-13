<template>
  <div>
    <nav>
      <h1>My Book List</h1>

      <!-- for logged in users -->
      <div id = "thing1" v-if="user">
        <router-link to="/">My books</router-link>
        <router-link to="/all">All books</router-link>
        <router-link to="/about">About</router-link>
        <button @click="handleClick">Logout</button>
      </div>
      
      
      <!-- for logged out users -->
      <div id ="thing2" v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </div>
  <p v-if="user">logged in as {{ user.email }}</p>
</template>

<script>
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import getUser from '../composables/getUser'
export default {
  setup() {
    const {user} = getUser()


    const handleClick = () => {
      signOut(auth)
    }

    return { handleClick,user }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
}
nav h1 {
  margin-right: auto;
  margin-bottom: 0;
}
nav a {
  margin-left: 16px;
  color: #2c3e50;
}
nav button {
  margin-left: 16px;
}
nav a.router-link-exact-active {
  color: #a6a813; 
}
nav + p {
  margin-top: 0;
  margin-bottom: 30px;
}
#thing1{
margin-top: 20px;
}
#thing2{
margin-top: 20px;
}
</style>
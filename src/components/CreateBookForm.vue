<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book To My List</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required>

    <label for="author">Book Genre:</label>
    <input type="text" name="author" v-model="genre" required>

    <label for="author">Book Language:</label>
    <input type="text" name="author" v-model="language" required>
    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { db } from '@/firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import getUser from '../composables/getUser'
export default {
  setup() {
    const title = ref('')
    const genre = ref('')
    const author = ref('')
    const language = ref('')
    const {user} = getUser()
    const handleSubmit = async () => {
      const colRef = collection(db,'books')
     await addDoc(colRef, {title : title.value, author : author.value, isFav : false, userUid : user.value.uid, language: language.value, genre: genre.value })
      title.value = ''
      author.value = ''
      genre.value = ''
      language.value =''
    }

    return { handleSubmit, title, author, genre, language}
  }
}
</script>

<style scoped>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
  border-radius: 5px;
}
form input{
 border-radius: 10px;
 border : none;
}

h3{
  color: #a6a813; 
}
</style>
<template>
  <div class="home">
    <h3>My Reading List...</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="handleDelete(book)">{{ book.title }}</h3>
          <p>Author: {{ book.author }}</p>
            <p>Written in: {{ book.language }}</p>
            <p>Genre: {{ book.genre }}</p>
        </div>
        <div @click='handleUpdate(book)' :class="{icon:true, fav:book.isFav}">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm />
  </div>
</template>

<script>
import CreateBookForm from '@/components/CreateBookForm'
import getCollection from '@/composables/getCollection'
import { db } from '@/firebase/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'
import getUser from '../composables/getUser'
export default {
  name: 'Home',
  components: { CreateBookForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()
    const {documents : books} = getCollection('books', ['userUid', '==', user.value.uid])
    const handleDelete = async (book) => {
      const docRef = doc(db, 'books', book.id)
      deleteDoc(docRef)
    }

    watchEffect(() => {
      if (!user.value) {
        router.push('/login')
      }
    })

    const handleUpdate = (book) => {
      const docRef = doc(db, 'books', book.id)
      updateDoc(docRef, {isFav : !book.isFav})
    }
    return { books, handleDelete, handleUpdate }

  }
}
</script>

<style scoped>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fffaf3;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}

.icon.fav{
  color : #f83f53
}
</style>
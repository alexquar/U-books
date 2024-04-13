<template>
    <div class="home">
      <h3>Global Reading List...</h3>
      <ul>
        <li v-for="book in books" :key="book.id">
          <div class="details">
            <h3>{{ book.title }}</h3>
            <p>Author: {{ book.author }}</p>
            <p>Written in: {{ book.language }}</p>
            <p>Genre: {{ book.author }}</p>
            <p>From {{ book.email }}'s list</p>
          </div>
          <div @click='handleUpdate(book)' :class="{icon:true, fav:book.isFav}">
            <p class="add">Add to my list</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import getCollection from '@/composables/getCollection'
  import { db } from '@/firebase/config'
  import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
  import { useRouter } from 'vue-router'
  import { watchEffect } from 'vue'
  import getUser from '../composables/getUser'
  export default {
    name: 'Home',
    setup() {
      const { user } = getUser()
      const router = useRouter()
      const {documents : books} = getCollection('books')
  
      watchEffect(() => {
        if (!user.value) {
          router.push('/login')
        }
      })
  
      const handleUpdate = (book) => {
        const docRef = doc(db, 'books', book.id)
        updateDoc(docRef, {isFav : !book.isFav})
      }
      return { books, handleUpdate }
  
    }
  }
  </script>
  
  <style>
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
  .add{
    color: #a6a813; 
  }
  </style>
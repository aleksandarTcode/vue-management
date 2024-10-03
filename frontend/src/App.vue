<script setup>

import {ref, onMounted} from 'vue'
import axios from 'axios'


const posts = ref([])

onMounted(async () => {

  let res = await axios.get('http://vue-management.test/api/posts')

  posts.value = res.data.data

  return {
    posts
  }

})



</script>

<template>

<div class="grid grid-cols-1 gap-2 mt-2 p-4">

  <h2>Posts</h2>


   <table class="min-w-full divide-y divide-gray-300">
     <thead>
     <tr>
       <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Id</th>
       <th scope="col" class="px-6 py-3 text-start text-sm uppercase">User</th>
       <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Title</th>
       <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Date</th>
     </tr>
     </thead>

     <tbody>
      <tr class="hover-me" v-for="post in posts" :key="post.id">
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.id}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.user}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.title}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.created_at}}</td>
      </tr>



     </tbody>

     </table>

</div>


</template>

<style scoped>

.hover-me:hover {

  background: #8a8a8a;

}
</style>

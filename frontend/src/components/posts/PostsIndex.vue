
<script setup>

import {ref, onMounted} from 'vue'
import usePosts from "@/composables/posts.js";

const {posts, getPosts, deletePost} = usePosts()


onMounted(getPosts)



</script>

<template>

  <div class="grid grid-cols-1 gap-2 mt-2 p-4">

    <h1>Posts</h1>

    <router-link class="w-1/6 bg-blue-500 text-white text-center rounded px-4 py-2" :to="{name: 'posts.create'}">Create New Post</router-link>

    <table class="min-w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">#</th>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Id</th>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">User</th>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Title</th>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Date</th>
        <th scope="col" class="px-6 py-3 text-start text-sm uppercase">Delete</th>
      </tr>
      </thead>

      <tbody>
      <tr class="hover-me" v-for="(post, index) in posts" :key="post.id">
        <td class="px-6 py-3 text-start text-sm uppercase">{{index+1}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.id}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">Aleksandar</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.title}}</td>
        <td class="px-6 py-3 text-start text-sm uppercase">{{post.created_at}}</td>
        <td><button @click="deletePost(post.id)" class="bg-red-500 text-white fond-bold rounded px-4 py-2 hover:bg-red-700">Delete</button></td>
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

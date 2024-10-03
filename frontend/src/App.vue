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

  {{posts}}

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
      <tr class="hover-me">
        <td class="px-6 py-3 text-start text-sm uppercase">4</td>
        <td class="px-6 py-3 text-start text-sm uppercase">Aleksandar</td>
        <td class="px-6 py-3 text-start text-sm uppercase">Post1</td>
        <td class="px-6 py-3 text-start text-sm uppercase">11-3-2024</td>
      </tr>

      <tr class="hover-me">
        <td class="px-6 py-3 text-start text-sm uppercase">5</td>
        <td class="px-6 py-3 text-start text-sm uppercase">Joe</td>
        <td class="px-6 py-3 text-start text-sm uppercase">Post2</td>
        <td class="px-6 py-3 text-start text-sm uppercase">12-3-2024</td>
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

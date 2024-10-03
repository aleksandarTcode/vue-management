<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

<div class="grid grid-cols-1 gap-2 mt-2 p-4">

  <h2>Posts</h2>

<!--  <button class="bg-blue-500 text-white hover:bg-blue-700 rounded py-2 px-4">Create</button>-->

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

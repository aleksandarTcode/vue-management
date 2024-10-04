<script setup>

</script>

<template>

  <div class="grid grid-cols-3 gap-4">

    <form class="col-start-2 space-y-6" action="">
      <div class="space-y-4 rounded-md shadow-sm">
        <div>
          <div class="mt-1">
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input
                type="text"
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-5"
            >
          </div>
        </div>

        <div>
          <div class="mt-1">
            <label for="title" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-5">
            </textarea>
          </div>
        </div>

        <button type="submit" class="bg-blue-500 text-white fond-bold rounded px-4 py-2 hover:bg-blue-700">Submit</button>

      </div>
    </form>

  </div>

</template>

<style scoped>

</style>
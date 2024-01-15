<template>
  <div class="">
    <h6 class="text-base my-4">Create group</h6>

     <div class="px-2">
        <form action="">
            <!-- group name -->
            <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group name</label>
                <input type="text" id="name" class="bg-dark-200 text-gray-200 text-sm rounded-sm focus:bg-dark-300 outline-0 block w-full px-2 py-3" placeholder="Group name" required>
            </div>

            <!-- group description -->
            <div class="mb-4">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group Description</label>
                <textarea id="message" rows="4"  class="block p-2.5 w-full outline-0 text-sm text-gray-200 bg-dark-200 rounded-sm" placeholder="Group descriptions"></textarea>
            </div>

            <!-- group type -->
            <div class="mb-4">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group type</label>
                    <select id="countries" class="bg-dark-200 outline-0 text-gray-200 text-sm rounded-sm block w-full p-2.5">
                    <option selected>public</option>
                    <option>Private</option>
                </select>
            </div>

            <button type="submit" class="flex items-center justify-center gap-x-2 mt-8 w-full px-4 py-2 bg-jeez-200 hover:bg-jeez-100 text-white text-center text-base">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
                Create Group
            </button>
        </form>
     </div>
  </div>
</template>

<script>

</script>


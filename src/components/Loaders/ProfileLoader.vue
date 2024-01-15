<template>
  <div class="">
    <div class="animate-pulse">

        <div class="mt-14 flex justify-center w-full">
            <div v-bind:src="pic" alt="" class="h-52 w-52 bg-dark-200 rounded-full">
            </div>
        </div>

        <div class="mt-6 flex flex-col items-center gap-y-2 justify-center w-full">
            <h6 class="text-4xl h-4 w-12 text-center bg-dark-200"></h6>
            <p class="text-base h-4 w-20 text-gray-400 text-center bg-dark-200"></p>
        </div>

        <div class="flex items-center justify-center w-full gap-x-4 mt-6">

            <div class="flex flex-col ">
                <div class="h-10 w-10 rounded-full bg-dark-200"></div>
                <p class="h-4 bg-dark-200 text-sm text-center mt-2"></p>
            </div>

            <div class="flex flex-col">
                <div class="h-10 w-10 rounded-full bg-dark-200"></div>
                <p class="h-4 bg-dark-200 text-sm text-center mt-2"></p>
            </div>

            <div class="flex flex-col">
                <div class="h-10 w-10 rounded-full bg-dark-200"></div>
                <p class="h-4 bg-dark-200 text-sm text-center mt-2"></p>
            </div>
            
        </div>

        <div class="px-4 mt-4">
            <h6 class="h-4 w-16 bg-dark-200 text-base mb-2"></h6>
            <div class="flex items-center">
                <div class="h-24 w-20 bg-dark-200 rounded-md"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

</script>

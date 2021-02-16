<template>
  <div
    class="h-96 header flex flex-col inline-block items-center align-middle"
  >
    <div
      class="flex flex-row justify-between w-4/6 xs:w-full h-20 border-2 border-t-0 border-l-0 border-r-0 border-blue-1000 p-6"
    >
      <div class="flex flex-row">
        <h1 class="text-blue-1000 bg-opacity-50 font-extrabold text-xl xs:font-bold xs:text-lg">
          ACTIVE
        </h1>
        <h1 class="text-white text-xl font-thin xs:text-lg">BOX</h1>
      </div>
      <div class=" flex flex-row justify-center align-center ">
        <button
          class="mr-3 uppercase text-white text-xs flex justify-center align-center p-2 xs:m-0 xs:invisible"
        >
          features
        </button>
        <button
          class="mr-3 uppercase text-white text-xs flex justify-center align-center p-2 xs:m-0 xs:invisible"
        >
          works
        </button>
        <button
          class="mr-3 uppercase text-white text-xs flex justify-center align-center p-2 xs:m-0 xs:invisible"
        >
          our team
        </button>
        <button
          class="mr-3 uppercase text-white text-xs flex justify-center align-center p-2 xs:m-0 xs:invisible xs:"
        >
          testimonials
        </button>
        <button
          class="mr-3 uppercase text-white text-xs flex justify-center align-center p-2 xs:m-0 xs:invisible xs:"
        >
          download
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center m-10 mt-40 p-6 w-4/6 xs:mt-32 xs:w-5/6">
      <h1 class=" font-bold m-0 text-5xl text-white uppercase tracking-wide xs:font-semibold xs:text-xl xs:text-center">
        your favorite one page
      </h1>
      <h1 class=" font-bold m-0 text-5xl text-white uppercase tracking-wide xs:font-semibold xs:text-xl xs:text-center">
        multi purpose template
      </h1>
      <div class="w-3/6 xs:w-5/6 xs:pt-6 flex justify-center align-center items-center">
        <p class="flex align-cnter justify-center text-white mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ducimus error aliquid nam reprehenderit quasi modi reiciendis
          consectetur
        </p>
      </div>
      <button
        class="m-10 h-10 w-40 rounded-md text-xs text-white uppercase bg-red-1000"
      >
        find out more
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: linear-gradient(
      rgba(46, 49, 65, 0.87),
      rgba(46, 49, 65, 0.87)
    ),
    url("https://images.pexels.com/photos/593322/pexels-photo-593322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>

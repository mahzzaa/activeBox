<template>
  <div class="flex flex-row h-70 xs:h-62 xs:flew-col md:h-62 lg:h-62">
    <div class="w-1/2 h-full md:hidden xs:hidden">
      <img src="~/assets/img/work.jpg" alt="" />
    </div>

    <div
      class="w-1/2 bg-purple-1000 xs:w-full md:w-full lg:w-full lg:p-6 sm:w-full p-6"
    >
      <div class="carousel relative">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0 flex flex-col inline-block items-center align-middle">
            <p
              class="md:p-10 md:w-4/5 xs:w-3/4 text-3xl font-semibold italic text-white mt-20 ml-12 mr-32 p-6 text-start xs:text-base xs:mt-2 xs:ml-3 xs:font-thin xs:mr-0 xs:p-3  md:text-base md:mt-2 md:ml-3 md:font-thin md:mr-0 md:p-3  lg:text-base lg:mt-2 lg:ml-3 lg:font-thin lg:mr-0 lg:p-3   sm:text-base sm:mt-2 sm:ml-3 sm:font-thin sm:mr-0 sm:p-3"
            >
              1 "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quaerat cupiditate earum pariatur sapiente architecto ullam
              asperiores ex! Quos in ipsum nam?"
            </p>
            <h4
              class="md:pl-10 text-white text-md p-6 pt-0 ml-12 xs:text-xs xs:ml-3  md:text-xs md:ml-3"
            >
              Lorem ipsum dolor
            </h4>
          </div>
          <label
            for="carousel-3"
            class="prev control-1 w-10 h-10 md:mt-14 md:ml-0 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 md:mt-14 md:mr-0 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="carousel-item absolute opacity-0 flex flex-col inline-block items-center align-middle"
          >
            <p
              class="md:p-10 md:w-4/5 xs:w-3/4 text-3xl font-semibold italic text-white mt-20 ml-12 mr-32 p-6 text-start xs:text-base xs:mt-2 xs:ml-3 xs:font-thin xs:mr-0 xs:p-3  md:text-base md:mt-2 md:ml-3 md:font-thin md:mr-0 md:p-3  lg:text-base lg:mt-2 lg:ml-3 lg:font-thin lg:mr-0 lg:p-3   sm:text-base sm:mt-2 sm:ml-3 sm:font-thin sm:mr-0 sm:p-3"
            >
              2 "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quaerat cupiditate earum pariatur sapiente architecto ullam
              asperiores ex! Quos in ipsum nam?"
            </p>
            <h4
              class="md:pl-10 text-white text-md p-6 pt-0 ml-12 xs:text-xs xs:ml-3  md:text-xs md:ml-3"
            >
              Lorem ipsum dolor
            </h4>
          </div>
          <label
            for="carousel-1"
            class="prev control-2 w-10 h-10 md:mt-14 md:ml-0 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 md:mt-14 md:mr-0 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0 flex flex-col inline-block items-center align-middle">
            <p
              class="md:p-10 md:w-4/5 xs:w-3/4 text-3xl font-semibold italic text-white mt-20 ml-12 mr-32 p-6 text-start xs:text-base xs:mt-2 xs:ml-3 xs:font-thin xs:mr-0 xs:p-3  md:text-base md:mt-2 md:ml-3 md:font-thin md:mr-0 md:p-3  lg:text-base lg:mt-2 lg:ml-3 lg:font-thin lg:mr-0 lg:p-3   sm:text-base sm:mt-2 sm:ml-3 sm:font-thin sm:mr-0 sm:p-3"
            >
              3 "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              quaerat cupiditate earum pariatur sapiente architecto ullam
              asperiores ex! Quos in ipsum nam?"
            </p>
            <h4
              class="md:pl-10 text-white text-md p-6 pt-0 ml-12 xs:text-xs xs:ml-3  md:text-xs md:ml-3"
            >
              Lorem ipsum dolor
            </h4>
          </div>
          <label
            for="carousel-2"
            class="prev control-3 w-10 h-10 md:mt-14 md:ml-0 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >‹</label
          >
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 md:mt-14 md:mr-0 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white-20 rounded-full bg-white-20 hover:bg-white-20 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >›</label
          >

          <!-- Add additional indicators for each slide-->
          <div class="m-10">
            <ol class="carousel-indicators ">
              <li class="inline-block mr-3">
                <label
                  for="carousel-1"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white-20"
                  >•</label
                >
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-2"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white-20"
                  >•</label
                >
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-3"
                  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white-20"
                  >•</label
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 20;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #d6d6d67b; /*Set to match the Tailwind colour you want the active one to be */
}
</style>

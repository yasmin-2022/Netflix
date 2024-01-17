<template>
  <div class="title text-white  pt-[16%] px-24">
    <div class="text-5xl my-4 font-bold">
      {{ userStore.nowPlaying[13]?.original_title }}
    </div>
    <p class="w-[300px]">{{ userStore. nowPlaying[13]?.overview }}</p>
    <button
      class="text-lg font-normal text-white bg-slate-500  w-[120px] py-2 px-4 rounded-md mt-5 mr-2 hover:bg-white hover:text-black"
    
    >
      <div class="flex justify-center ">
        <PlayIcon class="w-[27px] mr-1" />
        <span>play</span>
      </div>
    </button>
    <button
      class="text-lg font-normal text-white bg-slate-600  w-[150px] py-2 px-4 ml-2 hover:bg-white hover:text-black
       rounded-md"
    >
    <div class="flex justify-center">
      <InformationCircleIcon class="w-[27px] mr-2"/> 
      <span>
        More Info
      </span>
    </div>
    </button>
  </div>
</template>

<script>
import { PlayIcon , InformationCircleIcon } from "@heroicons/vue/24/solid"
import { onMounted } from "vue"
import { useUserStore } from "../store/userStore"

export default {
  name: "MainContainer",
  components: {
    PlayIcon,
    InformationCircleIcon 
  },
  setup() {
    const userStore = useUserStore()

    onMounted(async () => {
      userStore.nowPlayingMovie()
    })
    return {
      userStore,
    }
  },
}
</script>

<style lang="scss" scoped></style>

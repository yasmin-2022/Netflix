<template>
  <div class="flex justify-between items-center h-[90px] bg-gradient-to-b from-black">
    <div class="flex w-[800px] items-center">
      <img
        class="w-[150px] ml-16"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div class="flex cursor-pointer">
        <p class="mx-3 text-sm text-white">Home</p>
        <p class="mx-3 text-[0.90rem] text-white">TV Shows</p>
        <p class="mx-3 text-[0.90rem] text-white">Movies</p>
        <p class="mx-3 text-[0.90rem] text-white">New & Popular</p>
        <p class="mx-3 text-[0.90rem] text-white">My List</p>
        <p class="mx-3 text-[0.90rem] text-white">Browse by Languages</p>
      </div>
    </div>
    <div>
      <div class="flex w-[350px] justify-start cursor-pointer">
        <MagnifyingGlassIcon class="w-[21px] mr-2 text-white" />
        <p class="mr-2 text-white">Childern</p>
        <BellIcon class="w-[25px] mr-3 text-white" />
        <ChevronDownIcon class="w-[25px] mr-3 text-white" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline"
export default {
  name: "HeaderAuth",
  components: {
    MagnifyingGlassIcon,
    BellIcon,
    ChevronDownIcon,
  },
}
</script>

<style scoped>
.icon {
  width: 22px;
  height: 30px;
  float: right;
  color: white;
  margin-left: 12px;
  background: #000;
}
</style>

<template>
  <div class="w-full absolute top-[90%] min-h-[257px]  ">
    <div v-if="footer" class="w-[1400px]">
      <p class="text-[#949c96] ml-[21%] text-lg pt-[30px]">
        Question? Call <span class="underline cursor-pointer"> 000-800-919-1694</span> 
      </p>
      <div class=" grid grid-cols-4 ml-[16%]">
      <div
      class="text-[#949c96] text-sm font-normal mt-5"
      v-for="(loginFooter,index) in loginFooters" :key="index"
      >
         <a href="#" class="hover:underline m-16">{{ loginFooter.menu }}</a>
    </div>
    </div>
    <button
      class="border-[#949c96] border-2 px-6 text-[#949c96] rounded-md mr-8 bg-gradient-to-b from-black font-medium text-lg ml-[20%] mt-7"
    >
      English
      <ChevronDownIcon class="icon" />
    </button>
    </div >
    <div v-if="Herofooter" >
        <p class="text-[#949c96] ml-[13%] text-lg mt-2 pt-16">
      Question?<span class="underline cursor-pointer"> 000-800-919-1694</span>
    </p>
    <div class=" grid grid-cols-4 ml-[10%]">
         <div
        class="text-[#949c96] text-md font-normal mt-5 " v-for="footer in Footers" :key="footer"
      >
        <a href="#" class="underline m-16">{{ footer.menu }}</a>

      </div>
    </div>

       <button
      class="border-[#949c96] border-2 px-6 text-[#949c96] rounded-md mr-8 bg-gradient-to-b from-black font-medium text-lg ml-[13%] my-7"
    >
      English
      <ChevronDownIcon class="icon" />
    </button>
    <p class="text-[#949c96] font-medium ml-[13%] pb-7">Netflix India</p>
    </div>
  </div>
</template>

<script>
import {footers ,loginfooters} from './question'
import { ChevronDownIcon } from "@heroicons/vue/16/solid"
export default {
  name: "FooterPage",
  components: {
    ChevronDownIcon,
  },
  props: {
     Herofooter:Boolean,
     footer:Boolean,
  },
  setup () {
    const Footers = footers;
    const loginFooters = loginfooters
    return {
      Footers,
      loginFooters
    }
  }
  
}
</script>

<style scoped>
.icon {
  width: 26px;
  height: 36px;
  float: right;
  color: #949c96;
  margin-left: 12px;
}
</style>

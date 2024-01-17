<template>
  <div class="absolute flex justify-between w-[1240px] mx-[10%] items-center "  >
    <div class="w-80 flex " >
      <img
        class="w-[220px] "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
     
    </div>
    <div class="">
      <button
        class="border-[#ffffff] border-2 px-6  text-[#fffefe] rounded-md mr-8 bg-gradient-to-b from-black font-medium text-lg"
        @click="openDialog()"
      >
        English
        <ChevronDownIcon class="icon"/>
      </button>
      <button
      class="border-black border-1 px-6 py-2 text-white rounded-md bg-[#D10000] font-bold tracking-wide"
      >
      <router-link to="/login">

        Sign In
      </router-link>
    </button>
  </div>
  <div v-if="dialog === true" class="lang absolute top-[74%] left-[78%] text-center rounded-md bg-white"  >
    <div v-for="option in Options" :key="option" class="m-4 text-black p-1 mx-0 my-1 hover:bg-blue-600 hover:text-white cursor-pointer">
        {{ option }}
     </div>
  </div>
</div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/16/solid"
import { ref } from 'vue'
export default {

  name: "HeaderPage",
  components: {
    ChevronDownIcon,
  },
  setup () {
    const dialog = ref(false)
    const Options = ref(["English", "Hindi", "Urdu"]);
    function openDialog () {
      dialog.value = !dialog.value
      console.log("hello");
    }
    return {
      Options,
      dialog,
      openDialog
    }
  }
}
</script>
<style  scoped>
.icon {
  width: 26px;
  height: 36px;
  float: right;
  color: white;
  margin-left: 12px;
}

.lang {
  width: 140px;
  height: 120px;
  color: blue;
  /* background: #e00d0d; */
}
</style>

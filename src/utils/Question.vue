<template>
  <div>
    <div class="bg-black min-h-[920px] mt-2">
      <div
        class="text-[3.5rem] font-extrabold text-white relative top-16 text-center"
      >
        Frequently Asked Questions
      </div>
      <div v-for="(question, index ) in questions" :key="question.id">
        <div
          class="text-white bg-[#353535d6] hover:bg-[#4d4d4dd6] mb-[0.80rem] w-[1300px] border-black p-6 relative top-[80px] left-[12%] text-[1.6rem] transition-all duration-200 ease-in-out"
        >
          <div >
            <div class="flex justify-between items-center" @click="toggleAccordian(index)"  >
              <h1 class="text-[1.5rem]">
              {{ question.question }}</h1>
              <PlusIcon v-if="question.open === false" class="w-[40px]" />
              <XMarkIcon  v-if="question.open === true" class="w-[40px]" />
            </div>
          </div>
        </div>
        <div
          class="text-white bg-[#353535d6] w-[1300px] border-black p-2 px-5 relative top-[69px] left-[12%] text-[1.7rem]"
           v-if="question.open === true"
        >
          <p>
            {{ question.title1 }}
          </p>
          <p class="mt-7">{{ question.title2 }}</p>
        </div>
      </div>
      <div class="mt-[120px] text-center ">
        <div class="font-normal text-2xl tracking-wide text-white ">Ready to watch?Enter your email to create or restart your membership.</div>
      <input type="text" class="input w-[400px] bg-[#42424240] bg-opacity-50 py-5 border-2 border-[#999999] text-white rounded-md  pl-6 tracking-wide"  placeholder="Email address"  >
        <button class="bg-[#D10000] py-4 font-medium px-4 rounded-lg ml-3 mt-4 text-2xl tracking-normal text-white mb-[70px]">Get Started 
          <ChevronRightIcon class="w-[36px] h-[36] float-right text-white"/></button>
        </div>
    </div>
  </div>
</template>

<script>
import { Questions } from "./question"
import { ChevronRightIcon } from "@heroicons/vue/16/solid"
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline"
import { ref } from "vue"
export default {
  components: {
    PlusIcon,
    XMarkIcon,
    ChevronRightIcon 
  },
  setup () {
    const questions = ref(Questions)
    function toggleAccordian (index) {
      questions.value.forEach((ele,i) => {
        if (i === index) {
          ele.open = !ele.open;
        } else {
          ele.open = false;
      }
     })

    }

    return {
      questions,
      // accordian,
      toggleAccordian,
    }
  },
}
</script>

<style scoped></style>

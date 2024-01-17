<template>
  <div class="bg-[#353535d6] ">
    <div class="bg-black w-full h-[770px] bg-gradient-to-b from-black">
      <img
      class="w-full h-[772px] opacity-40"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
      alt=""
      />
      <Header class="absolute top-[0]"/>
      <div class="absolute top-[37%] left-[15%] text-white text-center
       font-">
        <div class="font-bold text-6xl tracking-normal">
          Laughter.Tears.Thrills.Find it On Netfilx.
        </div>
        <div class="font-normal tracking-wide text-2xl my-6 ">Endless entertainment starts at just ₹149. Cancel anytime.</div>
        <div class="font-normal text-2xl tracking-wide ">Ready to watch?Enter your email to create or restart your membership.</div>
        <input type="text" class="input w-[400px] bg-black bg-opacity-70 py-5 border-2 border-[#999999] rounded-md mt-10 pl-6 tracking-wide"  placeholder="Email address " >
        <button class="bg-[#D10000] py-[0.92rem] font-medium px-4 rounded-lg ml-3 mt-6 text-2xl tracking-normal">Get Started 
          <ChevronRightIcon class="w-[36px] h-[36] float-right "/></button>
      </div>
    </div>
    <Slots />
    <Question />
    <Footer  Herofooter class="relative bg-black"/> 
  </div>
</template>
<script>
import Header from "./Header.vue"
import Footer from "./footer.vue"
import Slots from './Slot.vue'
import Question from "./Question.vue"
import { ChevronRightIcon } from "@heroicons/vue/16/solid"
import { ref } from 'vue'

export default {
  name: "HeroPage",
  components: {
    Header,
    ChevronRightIcon,
    Footer,
    Slots,
    Question
  },
  setup () {
    const Herofooter = ref(true);
    return {
      Herofooter
    }
  }
}
</script>

<style  scoped>
.input::placeholder{
  font-size:larger;
  color:rgb(180, 179, 179);
  font-weight:600;
}
</style>

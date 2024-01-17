<template>
  <div class="bg-black w-full bg-gradient-to-b from-black">
    <img
    class="w-full opacity-40"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_large.jpg"
    alt=""
    />
    <Header class="absolute top-[0] "/>
    <div class="absolute top-[15%] left-[35%]  w-[450px] border-2 border-black bg-gradient-to-tr from-black ">
      <div class="text-4xl text-white font-bold mx-16 mt-16">Sign In</div>

      <input class="bg-[#292929] border-gray-300 rounded-md my-3 mx-16 p-4 w-[320px]"
      placeholder="Email or phone number">
       <input class="bg-[#292929] border-gray-300 rounded-md my-3 mx-16 p-4 w-[320px]" placeholder="Password"/>
       <button class="bg-[#D10000] w-[320px] mt-3 mx-16 p-4 rounded-md font-bold text-white">Sign In</button>
       <div class="flex justify-between mt-2">
         <div class="flex mx-16 ">
           <input type="checkbox" class="w-[18px] bg-gray-800 accent-[grey]"><p class="text-[#949c96] float-left ml-2">Remember me</p>
          </div>
          <p class="text-[#949c96] float-right mr-14 ">Need help?</p>
        </div>
        <div class="mt-[40px] mb-[80px]">
          <p class="text-[#949c96] ml-16" >New to Netflix?
           <router-link to="/"><span class="font-medium text-lg text-white mx-1">Sign up now</span></router-link> </p>
            <p  class="text-[#949c96] ml-16 mt-2 text-sm">
              Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
              <a class="text-blue-700">Learn more</a>
            </p>
           <p/>
        </div>
     

    </div>
    <Footer footer class="bg-black opacity-80"/>
  </div>
</template>

<script>
import Header from '../utils/Header.vue'
import Footer from '../utils/footer.vue'
import { ref } from 'vue'
  export default {
  name: 'LogIn',
  components: {
    Header,
      Footer
    },
    setup(){
        const footer = ref(true)
      return {
          footer
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>
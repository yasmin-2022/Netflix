<template>
  <!-- <div class=" -mt-60 relative z-20 min-h-[300px]">
     <div class="font-bold ml-[40px] text-white">{{ title }}</div>
      <div class="flex  ">
        <div  v-for="movie in movies" :key="movie"  class="w-[400px]" >
            <img :src="imgUrl(movie?.poster_path)" alt="dynamic url" 
            class="max-w-full h-auto" >
      </div>
    </div> 
  </div> -->
  <div>
    <div class="text-white font-medium text-[1.2rem] m-2">{{ title }}</div>
    <div class=" flex m-1 w-full overflow-x-scroll" >
      <div v-for=" movie,index in movies" :key="index" class="m-1 flex-shrink-0">
      <img :src="imgUrl(movie?.poster_path)" class="w-[200px] h-[200px]"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../store/userStore'
  export default {
  name: "MovieList", 
 
  props: {
    title: String,
    movies:[Array,Function]
  },
  setup (props) {
    const userStore = useUserStore();
    const link = ref("https://image.tmdb.org/t/p/w200/")
    const imgUrl = (urlimg) => {
      return link.value+urlimg
    }
    return {
      userStore,
      link,
      imgUrl,
    }
  }
  }
</script>

<style  scoped>

</style>
<template>
  <div class="bg-black"> 
    <div class="-mt-64 relative z-20  p-12 ">
      <MovieList title="Now Playing" :movies="userStore.nowPlaying " />
      <MovieList title="Trending" :movies="userStore.popularMovies"/>
      <MovieList title="TopRated" :movies="userStore.topRated"/>
      <MovieList title="UpComing" :movies="userStore.upComing"/>
    </div>
  </div>
</template>

<script>
import MovieList from './MovieList.vue'
import { useUserStore } from '../store/userStore'
import { onMounted } from 'vue';

export default {
    name: "SecondaryContainer", 
  components: {
      MovieList
  },
    setup () {
      const userStore = useUserStore();   
      onMounted(() => {
      userStore.popularMovie()
      userStore.topRated()
      userStore.upComing()
      
    })
    return {
      userStore
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>
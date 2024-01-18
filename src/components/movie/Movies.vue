<template>
  <div class="bg-black">
    <HeaderAuth/>
    <div class="flex overflow-x-scroll ml-4 ">
      <div v-for="movie in userStore.movies" :key="movie" class="flex-shrink-0 m-2 cursor-pointer ">
        <img :src="imgUrl(movie.poster_path)" alt="movie img" class="w-[200px]">
      </div>
    </div>
    <MovieList title="Now Playing" :movies="userStore.nowPlaying " class="ml-4" />
     <MovieList title="Trending" :movies="userStore.popularMovies" class="ml-4"/>
      <MovieList title="TopRated" :movies="userStore.topRated" class="ml-4 "/>
      <MovieList title="UpComing" :movies="userStore.upComing" class="ml-4"/>
  </div>
</template>

<script>
import MovieList from '../MovieList.vue'
import { onMounted ,ref} from 'vue';
import {useUserStore} from '../../store/userStore'
import HeaderAuth from '../../utils/HeaderAuth.vue';
  export default {
  components: { HeaderAuth,MovieList },
  setup () {
      const userStore = useUserStore();
      onMounted(() => {
        userStore.Movies(),
          userStore.nowPlayingMovie(),
         userStore.popularMovie()
      userStore.topRated(),
      userStore.upComing()

      })
      const link = ref("https://image.tmdb.org/t/p/w200/")
    const imgUrl = (urlimg) => {
      return link.value+urlimg
    }
      return {
        userStore,
        imgUrl
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
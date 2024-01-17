<template>
  <div>
    <HeaderAuth class="absolute w-full " />
    <MainContainer class="absolute" />
    <VideoTitle />
      <SecondaryContainer />
      <!-- <SecondaryContainer title="Trending" :movies="userStore.movies"/>
      <SecondaryContainer title="popular" :movies="userStore.movies"/> -->

  </div>
</template>

<script>
import HeaderAuth from '../utils/HeaderAuth.vue'
import MainContainer from './MainContainer.vue'
import VideoTitle from './VideoTitle.vue'
import SecondaryContainer from './SecondaryContainer.vue'
  export default {
  name: "Browse",
  components: {
    HeaderAuth,
    MainContainer,
    VideoTitle,
    SecondaryContainer,
  },

  }
</script>

<style  scoped>

</style>
<template>
  <div class="text-black ">
<iframe class="w-[100%] aspect-video" 
:src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</template>

<script>
import axios from 'axios'
import { onMounted , ref } from 'vue'
  export default {
  name: "VideoTitle",
  setup () {
    const title = ref([]);
    const link = ref('')
    const getMovieVideo = async () => {
      const movie = await axios.get("https://api.themoviedb.org/3/movie/976573/videos?api_key=4fee6aae27587c13e678c098a0301a15")
      const data = movie?.data?.results
      const filtered = data.filter((video) => video.type === "Trailer");
      title.value = filtered.length==0? data[0] : filtered[0];
      link.value ="https://www.youtube.com/embed/" +title.value.key+"?si=CpCBINcNp83MVbwwautoauto&autoplay=1&mute=1"

    }
    onMounted(async() => {
      getMovieVideo();
    })
    return {
      getMovieVideo,
      title,
      link,
      }
    }
  }
</script>

<style scoped>



</style>
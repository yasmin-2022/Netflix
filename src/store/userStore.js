import axios from 'axios';
import { defineStore } from 'pinia';
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    nowPlaying: [],
    popularMovies:[],
    topRated: [],
    upComing: [],
    movies:[]
  }),
  actions: {
    async nowPlayingMovie () {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4fee6aae27587c13e678c098a0301a15")
      console.log(response?.data?.results)
      this.nowPlaying=response?.data?.results
    },

    async popularMovie () {
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4fee6aae27587c13e678c098a0301a15")
    console.log(response?.data?.results)
    this.popularMovies=response?.data?.results
    },
     async topRated() {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4fee6aae27587c13e678c098a0301a15")
    console.log(response?.data?.results)
    this.topRated=response?.data?.results
  }, async upComing () {
    const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4fee6aae27587c13e678c098a0301a15")
    console.log(response?.data?.results)
    this.upComing=response?.data?.results
    },
      async Movies () {
    const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4fee6aae27587c13e678c098a0301a15")
    console.log(response?.data?.results)
    this.movies=response?.data?.results
  },
  }

})
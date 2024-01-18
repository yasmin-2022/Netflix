import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Card from '../views/Card.vue'
// import CityView from "../views/CityView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movie",
      name: "movie",
      component:()=>import('../components/movie/Movies.vue'),
    },
    {
      path: "/card",
      name: "card",
      component: Card,
    },
    {
      path: "/login",
      name: "login",
      component: ()=>import('../views/Login.vue')
    },
     {
      path: "/browse",
      name: "browse",
      component: ()=>import('../components/Browse.vue')
    },

    
  ],
});



export default router;

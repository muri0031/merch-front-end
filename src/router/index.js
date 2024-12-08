import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";
import MovieDetails from "../views/MovieDetails.vue";

const routes = [ 
{
    path: '/',
    name: 'Movies',
    component: Movies
},
{
    path: '/movie/:documentId',
    name: 'MovieDetails',
    component: MovieDetails
}
];

const router = createRouter({
history: createWebHistory(),
routes

});

export default router;
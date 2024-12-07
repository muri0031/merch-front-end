import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";
import Movies from "../views/Movies.vue";

const routes = [ 
{
    path: '/',
    name: 'Movies',
    component: Movies
}
];

const router = createRouter({
history: createWebHistory(),
routes

});

export default router;
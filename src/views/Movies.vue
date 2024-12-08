
<script>
import { ALL_MOVIES_API_URL } from '../utils';

export default {
  data() {
    return {
      movies: [] 
    };
  },
  mounted() {
    this.fetchMovies(); 
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await fetch(ALL_MOVIES_API_URL);
        const data = await response.json();
        this.movies = data.data; 
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <img :src="movie.Image.url" :alt="movie.Title" style="width: 200px; height: auto;" />
        <h2>{{ movie.Title }}</h2> 
      </li>
    </ul>
  </div>
</template>

  <style scoped>
  </style>
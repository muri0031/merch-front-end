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
    <div class="text">
    <p> Please Click on each movie to see the review of them</p>
  </div>
    <div class="Movies">
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie.id" class="movie-item">
        <router-link :to="`/movie/${movie.documentId}`" class="each-movie-link">
          <img :src="movie.Image.url" :alt="movie.Title" class="movie-image" />
          <h2>{{ movie.Title }}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

  <style scoped>
  </style>

<script>
import { RouterLink } from 'vue-router';
import { SINGLE_MOVIE_API_URL } from '../utils';

export default {
  data() {
    return {
      movie: null 
    };
  },
  async created() {
    await this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      const documentId = this.$route.params.documentId;
      try {
        const response = await fetch(SINGLE_MOVIE_API_URL(documentId)); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json();
        console.log('API Response:', data);
        this.movie = data.data;
      } catch (error) {
        console.error('Error fetching movie details:', error);
        this.movie = null; 
      }
    }
  }
};
</script>

<template>
    <div>
        <RouterLink to="/" class="all-movies"><span class="material-symbols-outlined">
arrow_back_ios
</span> All Movies</RouterLink>
      <h1 v-if="movie">{{ movie.Title }}</h1>
      <div class="movie">
      <img v-if="movie && movie.Image" :src="movie.Image.url" :alt="movie.Title" class="img-movieDetails" />
      <div class="review">
      <h3 v-if="movie">Review</h3>
      <p v-if="movie"> {{ movie.Review }}</p>
      <h3 v-if="movie">Reviewed by</h3>
      <p v-if="movie"> {{ movie.Name }}</p>
      <p v-else>Loading movie details...</p> 
    </div>
</div>
</div>
  </template>
  
  <style scoped>
  </style>
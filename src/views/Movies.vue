
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
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1>The Movie Buff's Corner</h1>
    </div>

    <!-- Movies Grid -->
    <div class="movies-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img
          :src="movie.Image.url"
          :alt="movie.Title"
          class="movie-image"
        />
        <h2 class="movie-title">{{ movie.Title }}</h2>
        <p class="movie-review">{{ movie.Review }}</p>
      </div>
    </div>
  </div>
</template>





<style scoped>
/* General Reset */
.container {
  padding: 50px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 30px;
}

/* .hero-section h1 {
  font-size: 2rem;
} */

/* Movies Grid for Small Screens */
.movies-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default for small screens */
  gap: 40px;
}

.movie-card {
  border: 2px solid #ffdd00;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 0; /* Remove padding inside the card */
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Movie Image Placeholder */
.movie-card img {
  display: block; /* Remove extra space below the image */
  width: 100%; /* Fill the width of the card */
  height: 600px; /* Enforce consistent height */
  object-fit: cover; /* Ensure the image fills the placeholder and keeps its aspect ratio */
}

.movie-title {
  /* font-size: 1.2rem;
  margin: 10px 0; */
  padding: 0 10px;
}

.movie-review {
  /* font-size: 0.9rem; */
  color: black;
  padding: 0 10px; /* Add padding for text inside the card */
}

/* Medium Screens (Tablets) and Large Screens (Desktops) */
@media (min-width: 768px) {
  .movies-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium and large screens */
    /* gap: 30px; */
  }

  .hero-section h1 {
    font-size: 4.5rem;
  }
}
</style>



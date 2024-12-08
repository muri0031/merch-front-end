
<script>
import { ALL_MOVIES_API_URL } from '../utils';
import ReviewModal from '../components/ReviewModal.vue'; // Import the modal component

export default {
  components: {
    ReviewModal
  },
  data() {
    return {
      movies: [],
      selectedMovie: null, // To store the selected movie for the modal
      showModal: false // Controls modal visibility
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
    },
    openModal(movie) {
      this.selectedMovie = movie;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>


<template>
  <div class="container">
    <!-- Hero Section -->
    <header class="hero-section">
      <h1>The Movie Buff's Corner</h1>
    </header>

    <!-- Movies Grid -->
    <div class="movies-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img
          :src="movie.Image.url"
          :alt="movie.Title"
          class="movie-image"
        />
        <h2 class="movie-title">{{ movie.Title }}</h2>
        <button class="view-review-btn" @click="openModal(movie)">View Review</button>
      </div>
    </div>

    <!-- Review Modal -->
    <ReviewModal 
      :visible="showModal" 
      :movie="selectedMovie" 
      @close="closeModal" 
    />
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
  height: 400px; /* Enforce consistent height */
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



/* View Review Button */
.view-review-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ffdd00; /* Blue background */
  color: black; /* White text */
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.view-review-btn:hover {
  background-color: #2980b9; /* Darker blue on hover */
  color: white; 
}


/* ------------Medium Screens (Tablets) and Large Screens (Desktops)----------- */
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



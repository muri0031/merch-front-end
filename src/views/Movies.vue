
<script>
import { ALL_MOVIES_API_URL } from '../utils';
import ReviewModal from '../components/ReviewModal.vue'; // Import the modal component

export default {
  components: {
    ReviewModal
  },
  data() {
    return {
      movies: [], // Original movies data fetched from the API
      filteredMovies: [], // Filtered movies to display
      searchQuery: '', // Search input query
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
        this.filteredMovies = data.data; // Initialize filteredMovies
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
    },
    filterMovies() {
      const query = this.searchQuery.toLowerCase();
      this.filteredMovies = this.movies.filter(movie =>
        movie.Title.toLowerCase().includes(query)
      );
    }
  },
  watch: {
    searchQuery: 'filterMovies' // Automatically filter movies when the search query changes
  }
};
</script>



<template>
  <div class="container">
    <!-- Hero Section -->
    <header class="hero-section">
      <h1>The Movie Buff's Corner</h1>
    </header>

    <!-- Search Box -->
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search for a movie..." 
        class="search-input"
      />
    </div>

    <!-- Movies Grid -->
    <div class="movies-grid">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
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

/* Search Box */
.search-box {
  margin-bottom: 100px;
  text-align: center;
}

.search-input {
  width: 80%;
  max-width: 400px;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ffdd00;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #2980b9;
}

/* Movies Grid for Small Screens */
.movies-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column by default for small screens */
  gap: 60px;
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
  aspect-ratio: 4 / 6;
  object-fit: cover; /* Ensure the image fills the placeholder without distortion */
  border-radius: 8px; /* Optional: Add rounded corners */
}


.movie-title {
  padding: 0 10px;
}

.view-review-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ffdd00;
  color: black;
  /* font-size: 0.9rem; */
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1vw, 1.2rem);
}

.view-review-btn:hover {
  background-color: #2980b9;
  color: white;
}

h1 {
  font-size: clamp(1.5rem, 4vw, 4.5rem); /* Minimum size: 1.5rem, Preferred size: 4vw, Maximum size: 4.5rem */
}

h2 {
  font-size: clamp(1.5rem, 2vw, 2.2rem); /* Minimum size: 1rem, Preferred size: 3vw, Maximum size: 3rem */
}


/* Medium Screens (Tablets) and Large Screens (Desktops) */
@media (min-width: 768px) {
  .movies-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium and large screens */
  }

  /* .hero-section h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.9rem;
  } */
   
}
</style>




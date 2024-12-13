
<script>
import { ALL_MOVIES_API_URL } from '../utils';
import ReviewModal from '../components/ReviewModal.vue'; 

export default {
  components: {
    ReviewModal
  },
  data() {
    return {
      movies: [], 
      filteredMovies: [], 
      searchQuery: '',
      selectedMovie: null, 
      showModal: false,
      loading: false 
    };
  },
  mounted() {
    this.fetchMovies(); 
  },
  methods: {
    async fetchMovies() {
      this.loading = true; 
      try {
        const response = await fetch(ALL_MOVIES_API_URL);
        const data = await response.json();
        this.movies = data.data; 
        this.filteredMovies = data.data; 
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        this.loading = false; 
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
    searchQuery: 'filterMovies' 
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

        <!-- Loading Indicator -->
        <div v-if="loading" class="loader-container">
      <div class="loader"></div>>
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

/*Loader*/
.loader-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100px; 
}
.loader {
   --s: 40px;
   height: calc(var(--s)*0.9);
   width: calc(var(--s)*5);
  --v1:transparent,#000 0.5deg 108deg,#0000 109deg;
  --v2:transparent,#000 0.5deg  36deg,#0000  37deg;
  -webkit-mask:
    conic-gradient(from 54deg  at calc(var(--s)*0.68) calc(var(--s)*0.57),var(--v1)),
    conic-gradient(from 90deg  at calc(var(--s)*0.02) calc(var(--s)*0.35),var(--v2)),
    conic-gradient(from 126deg at calc(var(--s)*0.5)  calc(var(--s)*0.7) ,var(--v1)),
    conic-gradient(from 162deg at calc(var(--s)*0.5)  0                  ,var(--v2));
  -webkit-mask-size: var(--s) var(--s);
  -webkit-mask-composite: xor,destination-over;
          mask-composite: exclude,add;
  -webkit-mask-repeat:repeat-x;
  background:linear-gradient(#ffb940 0 0) left/0% 100% #ddd no-repeat;
  animation: l20 2s infinite linear;
}
@keyframes l20 {
    90%,100% {background-size:100% 100%}
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
  grid-template-columns: 1fr; 
  gap: 60px;
}

.movie-card {
  border: 2px solid #ffdd00;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 0; 
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



/* Movie Image Placeholder */
.movie-card img {
  display: block; 
  width: 100%; 
  aspect-ratio: 4 / 6;
  object-fit: cover; 
  border-radius: 8px;
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
  font-size: clamp(1.5rem, 4vw, 4.5rem); 
}

h2 {
  font-size: clamp(1.5rem, 2vw, 2.2rem); 
}


/* Medium Screens (Tablets) and Large Screens (Desktops) */
@media (min-width: 768px) {
  .movies-grid {
    grid-template-columns: repeat(3, 1fr); 
  }

  /* .hero-section h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 1.9rem;
  } */
   
}

</style>




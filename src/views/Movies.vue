<script>
import { ALL_MOVIES_API_URL } from '../utils';
import NavMenu from '../components/NavMenu.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavMenu,
    Footer, // Register the NavMenu component
  },
  data() {
    return {
      movies: [],
      loading: true, 
      searchQuery: '',
    };
  },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        return movie.Title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
  async fetchMovies() {
    this.loading = true; // Set loading to true
    try {
      const response = await fetch(ALL_MOVIES_API_URL);
      const data = await response.json();
      this.movies = data.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      this.loading = false; // Set loading to false after fetching
    }
  },
},

};
    
</script>

<template>
   <div class="movies-container">
    <div class="video-banner-container">
      <video autoplay muted loop class="video-banner">
        <source src="/movies.mp4" type="video/mp4" />
      </video>
      <NavMenu /> <!-- Overlay NavMenu on the video -->
      <h1 class="overlay-text">Movies Reviews</h1> <!-- Overlay text -->
    </div>
    
 <!-- Search Input -->
 <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a movie..."
        class="search-input"
      />
    </div>

    <p class="text">
      🍿Discover reviews for some of the best movies ever made.🍿 <br> 👉Click on each movie to explore detailed insights and find your next favorite film.
</p>

    <!-- Loader -->
    <div v-if="loading" class="loader">Loading</div>
   
    <div class="movies" v-else>
  <ul class="movie-list">
    <li v-for="movie in filteredMovies" :key="movie.id" class="movie-item">
      <router-link :to="`/movie/${movie.documentId}`" class="each-movie-link">
        <img :src="movie.Image.url" :alt="movie.Title" class="movie-image" />
        <h2>{{ movie.Title }}</h2>
      </router-link>
    </li>
  </ul>
</div>
    
    <Footer />
  </div>
</template>

  <style scoped>

.loader {
  width: 120px;
  height: 20px;
  background: 
    linear-gradient(90deg, #0000 ,#ffcc00) left -50px top 0/50px 20px no-repeat 
    whitesmoke;;
  animation: l2 1s infinite linear;
  margin: 0 auto; /* Center the loader */
  text-align: center;
}

/*search*/
.search-container {
  display: flex; /* Use flexbox for alignment */
  justify-content: center; /* Center the input horizontally */
  margin: 20px 0; /* Add vertical margin */
}

.search-input{
  width: 80%; /* Width of the input */
  padding: 10px; /* Padding for the input */
  font-size: 1.2rem; /* Font size */
  border: 1px solid #ffcc00; /* Border color */
  border-radius: 5px; /* Rounded corners */
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background */
  color: #ffcc00; /* Text color */
  transition: border-color 0.3s ease;
  margin-top: 25px;;
}

.search-input::placeholder {
  color: #ffcc00; /* Placeholder text color */
  opacity: 0.7; /* Slightly transparent placeholder */
}

.search-input:focus {
  outline: none; /* Remove default outline */
  border-color: #fff; /* Change border color on focus */
  background-color: rgba(255, 255, 255, 0.2); /* Darker background on focus */
}

  .tangerine-regular {
  font-family: "Tangerine", serif;
  font-weight: 400;
  font-style: normal;
}

.tangerine-bold {
  font-family: "Tangerine", serif;
  font-weight: 700;
  font-style: normal;
}

  body{
    background-color: black;
   
  }

  /******** Video Banner ********/
  .lobster-regular {
  font-family: "Lobster", serif;
  font-weight: 400;
  font-style: normal;
}

.video-banner-container {
  position: relative; /* Positioning context for overlay */
  width: 100%; /* Full width */
  height: 60vh; /* Set height for the video container */
  overflow: hidden; /* Hide overflow */
}

.video-banner {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  object-fit: cover; /* Cover the container */
}
.overlay-text {
  position: absolute; /* Position absolute for overlay */
  top: 60%; /* Center vertically */
  left: 0; /* Align to the left */
  width: 100%; /* Full width */
  text-align: center; /* Center text */
  color: #ffcc00; /* Text color */
  font-size: 5rem; /* Font size */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for better visibility */
  z-index: 10; /* Ensure text is above the video */
  font-family: "Alata", serif; /* Font family */
  font-weight: 350; /* Font weight */
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis;
  
}
/* NavMenu Overlay */
.nav-menu {
  position: absolute; /* Position the NavMenu absolutely */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left */
  width: 100%; /* Full width */
  z-index: 20; /* Ensure it is above the video */
} 


.movies {
  margin-top: 50px;
  display: flex; /* Ensure the movie list is displayed in a row */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  padding: 20px; /* Add some padding */
}

.movie-list{
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  display: grid; /* Use grid layout */ grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 20px; /* Space between items */
  color: white;
}


.movie-item {
  background-color: rgb(7, 7, 7, 0.1); 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px; 
  height: 400px;
  overflow: hidden;
  color: white;
 
  box-shadow: 0 6px 8px rgba(255, 204, 0, 0.5);
}

.movie-item:hover {
  transform: scale(1.05); /* Scale up on hover */
  box-shadow: 0 8px 16px rgba(255, 204, 0, 0.5); /* Increase shadow on hover */
}
.movies-container{
  background-color: black;
}
/*Movies*/
.each-movie-link{
  text-decoration: none;
  color: whitesmoke;
}
.text{
  font-size: 1.5rem; /* Font size */
  color: white; /* Text color */
  width: 95%; /* Width of the text container */
margin-top:40px;
text-align: center; /* Center text */
  font-weight: 300; /* Bold text */
  font-family: "Roboto", serif;
}




.movie-image {
  width: 100%; 
  height: 300px;
  overflow: hidden; 
}

.movie-image img{
  width: 100%; 
  height: 100%; 
  object-fit: contain; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.each-movie-link {
  text-decoration: none; 
  color: white;
  display: block;
  text-align: center;
}

  </style>
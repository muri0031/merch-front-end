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
  },
};
    
</script>

<template>
  
 
  <div class="movies-container">
    <NavMenu /> <!-- Include the NavMenu component -->
   >
    <h1>Movies</h1>
    <div class="movies">
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
<Footer>

</Footer>
</template>

  <style scoped>
  body{
    background-color: black;
   
  }


.movies {
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
  transition: transform 0.2s;
  width: 300px; 
  height: 400px;
  overflow: hidden;
  color: white;
  border: 1px solid #ffcc00;;
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
  font-size: 1.5rem;
  background-color: rgba(73, 73, 73, 0.9);
  color: aliceblue;
  width: 50%;
  margin: 0 auto;
  border-radius: 50px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 700;
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
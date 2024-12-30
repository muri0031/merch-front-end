
<script>
import { RouterLink } from 'vue-router';
import { SINGLE_MOVIE_API_URL } from '../utils';
import NavMenu from '../components/NavMenu.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavMenu, 
    Footer,// Register the NavMenu component
  },
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
  <NavMenu /> <!-- Include the NavMenu component -->
    <div class="review-container">
        <RouterLink to="/" class="all-movies">

          <span class="material-symbols-outlined">
arrow_back_ios
</span> All Movies
        </RouterLink>

      <h1 v-if="movie">{{ movie.Title }}</h1>
      <div class="movie">
      <img v-if="movie && movie.Image" :src="movie.Image.url" :alt="movie.Title" class="img-movieDetails" />
      <div class="review">
      <h3 v-if="movie">Review</h3>
          <!-- Static Star Rating -->
          <div class="star-rating">
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star filled">★</span>
        </div>
      <p v-if="movie"> {{ movie.Review }}</p>
      <h3 v-if="movie">Reviewed by</h3>
      <p v-if="movie"> {{ movie.Name }}</p>
      <p v-else>Loading movie details...</p> 
    </div>
</div>
</div>
<Footer />
  </template>
  
  <style scoped>
  h1{
    color: #ffcc00;
  }
  .review-container{
    background-color: black;
    color: white;
  }

.movie{
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center; 
  align-items: center;

}

.img-movieDetails{
  width:35%;
  height: auto;
}

.review{
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.1); 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  width: 60%;
  margin-top: 50px;
  margin-bottom: 35px;;
}

h3{
  text-align: center;
  font-size: 2.0rem;
}

p{
  font-size: 1.2rem;
  text-align: center;
  padding: 10px;
}


.all-movies {
  display: inline-block; 
  margin-bottom: 20px; 
  text-decoration: none; 
  color: white;
  font-weight: bold; 
  margin-top: 80px;
  margin-left: 50px;
}

.all-movies:hover {
  text-decoration: underline; 
}
.star-rating {
  font-size: 24px; /* Adjust the size of the stars */
  color: gold; /* Color for filled stars */
  text-align: center; /* Center the stars */
}

.star {
  color: lightgray; /* Color for unfilled stars */
}

.star.filled {
  color: gold; /* Color for filled stars */
}

  </style>
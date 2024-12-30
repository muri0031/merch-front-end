<script>
export default {
  name: 'NavMenu',
};
</script>

<template>
    <nav class="nav-menu">
    <ul>
      <li><router-link to="/">
        <img src="/popcorn.png" alt="popcorn" class="nav-logo" />
    </router-link></li>
    </ul>
  </nav>  
</template>

<style scoped>
.nav-menu {
  background-color:transparent; /* Dark background */
  padding-top: 10px;
  z-index: 10;
  position: relative; /* or fixed if you want it to stay at the top */
  top: 0;
}

.nav-menu ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
  display: flex; /* Use flexbox for horizontal layout */
  justify-content: flex-start /* Space items evenly */
}

.nav-menu li {
  margin: 0 15px; /* Space between items */
}

.nav-menu a {
  font-family: "poppins";
  color: #ffcc00; /* Link color */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Bold text */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack items vertically */
  align-items: center; 
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth color and transform transition */
}

.nav-menu a:hover {
 /* Underline on hover */
  color: #ffffff; /* Change color on hover */
  transform: scale(1.05); /* Slightly scale up on hover */
}

.nav-logo {
  width: 35px; /* Set the width of the logo */
  height: auto; /* Maintain aspect ratio */
  margin-right: 5px; /* Space between the logo and text */
  transition: transform 0.3s ease; /* Smooth scaling transition */
}

.nav-menu a:hover .nav-logo {
  transform: scale(1.2); /* Scale up the logo on hover */
}

.review-images {
  display: flex; /* Use flexbox for the review images */
  flex-direction: column; /* Stack images vertically */
  align-items: center; /* Center images horizontally */
}
</style>
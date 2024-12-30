<script>
import NavMenu from './NavMenu.vue';

export default {
  name: 'Footer',
};
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Movies. All rights reserved.</p>
        <div class="footer-links">
        <RouterLink to="/movies" class="footer-link">Movies</RouterLink>
        <RouterLink to="/reviews" class="footer-link">Reviews</RouterLink>
      </div>
      </div>
    </footer>
  </template>

  
<style scoped>
.footer {
  background-color: #000000; /* Dark background */
  color: white; /* White text */
  padding: 20px; /* Padding around the footer */
  text-align: center; /* Center text */

  box-shadow: 0 8px 16px rgba(255, 204, 0, 0.5);

}

.footer-content {
  max-width: 1200px; /* Max width for content */
  margin: 0 auto; /* Center the content */
}

.footer-links {
  margin-top: 10px; /* Space above the links */
}

.footer-link {
  color:  #ffcc00; /* White text for links */
  margin: 0 15px; /* Space between links */
  text-decoration: none; /* Remove underline */
}

.footer-link:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
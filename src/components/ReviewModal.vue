<template> 
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-btn" @click="close" aria-label="Close">
          ✖
        </button>
        <h2>{{ movie?.Title }}</h2>
        <img :src="movie?.Image?.url" alt="Movie Image" class="modal-image" />
        <p>{{ movie?.Review }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      movie: {
        type: Object,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative; /* Relative positioning to position the close button */
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    width: 80%;
    text-align: center;
  }
  
  .modal-image {
    max-width: 300px;
    /* height: auto; */
    max-height: 400px;
    margin: 20px 0;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 2rem; /* Increase the font size for better visibility */
    cursor: pointer;
    color: #e74c3c; /* Red color for the close button */
    font-weight: bold;
    transition: transform 0.2s ease, color 0.2s ease; /* Smooth transitions */
  }
  
  .close-btn:hover {
    color: #c0392b; /* Darker red on hover */
    transform: scale(1.2); /* Slightly enlarge the button when hovered */
  }
  
  p {
    color: black;
    font-size: 1.3rem;
    padding: 0 20px;
  }
  </style>
  
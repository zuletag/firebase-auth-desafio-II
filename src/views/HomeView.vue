<template>
  <div class="d-flex justify-content-center align-items-center container-mod">
    <div class="container">
      <img src="../assets/img/poro_hello.png" alt="Header Image" class="img-fluid mb-4 mx-auto d-block">
      <div class="card shadow-lg">
        <div class="card-header bg-primary text-white text-center">
          <h1>Inicio</h1>
        </div>
        
        <div class="card-body text-center">
          <p class="card-text">Bienvenido a la página de inicio, solo visible para usuarios registrados (y cool, como ustedes).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-mod {
  height: 90vh;
} 

.card {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 15px;
}

.card-header {
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
}

img {
  max-width: 300px;
  height: auto;
}

.card-body {
  font-size: 1.2rem;
  color: #555;
}
</style>


<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div class="container-fluid d-flex justify-content-between">
        <router-link class="navbar-brand" to="/">Desafío Firebase</router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-nowrap">
          <li class="nav-item">
            <router-link class="nav-link" to="/acceder" v-if="!isAuthenticated">Acceso</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registrarse" v-if="!isAuthenticated">Registro</router-link>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-outline-secondary" v-if="isAuthenticated" @click="logout">Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false
    }
  },
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.isAuthenticated = !!user
    })
  },
  methods: {
    async logout() {
      const auth = getAuth()
      try {
        await signOut(auth)
        this.$router.push('/acceder')
      } catch (error) {
        console.error("Error al cerrar sesión:", error)
      }
    }
  }
}
</script>

<style>
.navbar {
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-link {
  color: #0056b3;
}

.navbar-nav .nav-link:hover {
  color: #003d75;
}

.navbar-brand {
  font-weight: bold;
  color: #000;
}

.navbar-brand:hover {
  color: #333;
}
</style>


<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 80vh;">
    <div class="card p-4" style="width: 24rem;">
      <h3 class="text-center mb-4">Acceso</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input type="email" class="form-control" v-model="email" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const auth = getAuth()
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        console.error("Error al iniciar sesión:", error, user)
        alert("Error al ingresar, revise sus credenciales.")
      }
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 80vh;">
    <div class="card p-4" style="width: 24rem;">
      <h3 class="text-center mb-4">Registro</h3>
      <form @submit.prevent="signUp">
        <div class="mb-3">
          <input type="email" class="form-control" v-model="email" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
      const auth = getAuth()
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/')
        alert("Registro realizado correctamente")
      } catch (error) {
        console.error("Error en la creación de usuario:", error, user)
      }
    }
  }
}
</script>

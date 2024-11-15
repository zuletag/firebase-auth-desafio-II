import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUpView.vue';
import Login from '../views/LoginView.vue';
import { auth } from "@/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/acceder',
      name: 'acceder',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: SignUp,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next('/registrarse'); // redirige a Sign Up si el usuario no está autenticado
  } else if (!to.meta.requiresAuth && user) {
    next('/'); // redirige a Home si el usuario ya está autenticado
  } else {
    next(); // permite acceso a la ruta
  }
});

export default router;


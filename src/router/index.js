import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Página principal"
    },
    component: Home
  },
  {
    path: '/Usuário',
    name: 'UserPage',
    meta: {
      title: "Página de Usuário",
      requiresAuth: true
    },
    component: () => import('../Pages/UserPage.vue')
  },
  {
    path: '/Categorias',
    name: 'Categories',
    meta: {
      title: "Categorias",
      requiresAuth: true
    },
    component: () => import('../Pages/Categories.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      title: "Login"
    },
    component: () => import('../Pages/Login.vue')
  },
  {
    path: '/Cadastro',
    name: 'Cadastro',
    meta: {
      title: "Cadastro"
    },
    component: () => import('../Pages/Cadastro.vue')
  },
  {
    path: '/Categorias/Subcategoria/Idiomas',
    name: 'Subcategory_Language',
    meta: {
      title: "Subcategorias - Idiomas",
      requiresAuth: true
    },
    component: () => import('../Pages/Subcategories/Subcategory_Language.vue')
  },
  {
    path: '/Categorias/Subcategoria/AtividadeFísica',
    name: 'Subcategory_Sports',
    meta: {
      title: "Subcategorias - Atividade Física",
      requiresAuth: true
    },
    component: () => import('../Pages/Subcategories/Subcategory_Sports.vue')
  },
  {
    path: '/Categorias/Subcategoria/Música',
    name: 'Subcategory_Music',
    meta: {
      title: "Subcategorias - Música",
      requiresAuth: true
    },
    component: () => import('../Pages/Subcategories/Subcategory_Music.vue')
  },
  {
    path: '/Categorias/Subcategoria/Idiomas/Inglês',
    name: 'Activity_English',
    meta: {
      title: "Atividade - Inglês",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_English.vue')
  },
  {
    path: '/Categorias/Subcategoria/Idiomas/Espanhol',
    name: 'Activity_Spanish',
    meta: {
      title: "Atividade - Espanhol",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Spanish.vue')
  },
  {
    path: '/Categorias/Subcategoria/Idiomas/Francês',
    name: 'Activity_French',
    meta: {
      title: "Atividade - Francês",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_French.vue')
  },
  {
    path: '/Categorias/Subcategoria/AtividadeFísica/Esportes',
    name: 'Activity_Sports',
    meta: {
      title: "Atividade - Esportes",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Sports.vue')
  },
  {
    path: '/Categorias/Subcategoria/AtividadeFísica/Crossfit',
    name: 'Activity_Crossfit',
    meta: {
      title: "Atividade - Crossfit",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Crossfit.vue')
  },
  {
    path: '/Categorias/Subcategoria/AtividadeFísica/Musculação',
    name: 'Activity_Bodybuilding',
    meta: {
      title: "Atividade - Musculação",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Bodybuilding.vue')
  },
  {
    path: '/Categorias/Subcategoria/Música/Violão',
    name: 'Activity_Guitar',
    meta: {
      title: "Atividade - Violão",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Guitar.vue')
  },
  {
    path: '/Categorias/Subcategoria/Música/Teclado',
    name: 'Activity_Keyboard',
    meta: {
      title: "Atividade - Teclado",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Keyboard.vue')
  },
  {
    path: '/Categorias/Subcategoria/Música/Bateria',
    name: 'Activity_Drums',
    meta: {
      title: "Atividade - Bateria",
      requiresAuth: true
    },
    component: () => import('../Pages/Activities/Activity_Drums.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    meta: {
      title: "Página não encontrada"
    },
    component: () => import('../Pages/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth)) {
    if(!store.state.activeUser) {
      next('/login')
    } 
    else { next() }
  }
  else { next() }
})

export default router

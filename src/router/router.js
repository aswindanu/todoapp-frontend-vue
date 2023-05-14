import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Documentation from '../pages/Docs.vue'


const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/about', name: "About", component: About },
  { path: '/docs', name: "Documentation", component: Documentation },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes };
export default router;
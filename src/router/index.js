import { createWebHistory, createRouter } from "vue-router"
import mortgage from "@/views/calculator.vue"
import first_page from "@/views/Landing_page.vue"

const routes = [
  {
    path: "/",
    name: "calculator",
    component: mortgage,
  },
  {
    path:'/f-page',
    name:"Landing_page",
    component:first_page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
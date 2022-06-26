import { createRouter, createWebHistory } from 'vue-router'

const routes = [
{
  path:"/",
  component: ()=> import("../views/Home")
},
{
  path:"/cars",
  component: ()=> import("../views/Cars")
},
{
  path:"/company",
  component: ()=> import("../views/Company")
},
{
  path:"/car/:id",
  component: ()=> import("../components/view")
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

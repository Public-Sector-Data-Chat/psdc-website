import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Conduct from '../views/Conduct.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/code-of-conduct', component: Conduct },
        {path: '/:catchAll(.*)*', name: "PageNotFound", component: PageNotFound,}
    ]
})

export default router
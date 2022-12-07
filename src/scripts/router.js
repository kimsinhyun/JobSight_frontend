import HomePageVue from "@/pages/HomePage.vue";
import TopSkillsVue from "@/pages/TopSkills.vue";
import SkillDetail from "@/pages/SkillDetail.vue";
import {createRouter, createWebHistory} from "vue-router"


const routes = [
    {path: '/Home', component: HomePageVue},
    {path: '/TopSkills', component: TopSkillsVue},
    {path: '/SkillDetail', component: SkillDetail},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
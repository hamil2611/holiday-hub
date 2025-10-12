import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import DefaultLayout from "@/commons/layout/DefaultLayout.vue";
import pages from "@/router/page";
import VietnameseWomenDay from "@/views/vietnamese-women-day/VietnameseWomenDay.vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                ...pages.vietnameseWomenDay,
                component: VietnameseWomenDay,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0,0);
    next();
})

export default router;
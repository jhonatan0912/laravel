import { createRouter, createWebHistory } from "vue-router";
import Register from "@views/auth/Register.vue";
import Login from "@views/auth/Login.vue";
import Dashboard from "@views/Dashboard.vue";
import axios from "axios";

const routes = [
    { path: "/", redirect: "/register" },
    { path: "/register", name: "Register", component: Register },
    { path: "/login", name: "Login", component: Login },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        try {
            await axios.get("/api/user");
            next();
        } catch (error) {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;

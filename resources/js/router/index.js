import Login from "@views/auth/Login.vue";
import Register from "@views/auth/Register.vue";
import Dashboard from "@views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", redirect: "/register" },
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function isAuthenticated() {
    return !!localStorage.getItem("user");
}

router.beforeEach((to, from, next) => {
    const loggedIn = isAuthenticated();

    if ((to.path === "/login" || to.path === "/register") && loggedIn) {
        next("/dashboard");
    } else if (to.meta.requiresAuth && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});

export default router;

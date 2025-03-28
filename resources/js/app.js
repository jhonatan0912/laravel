require("./bootstrap");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://laravel.test";
axios.defaults.withCredentials = true;

createApp(App).use(router).mount("#app");

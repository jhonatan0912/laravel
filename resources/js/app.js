require("./bootstrap");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// Element Components
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

axios.defaults.baseURL = "http://laravel.test";
axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

for (const [key, element] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, element);
}

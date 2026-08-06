import { createApp } from "vue";

import App from "./App.vue";
import { router } from "@/app/router";
import { setupProviders } from "@/app/providers";

import "@/shared/api";
import "@/style.css";

const app = createApp(App);

app.use(router);

setupProviders(app);

app.mount("#app");
import type { RouteRecordRaw } from "vue-router";

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/features/home/pages/HomePage.vue"),
    meta: {
      title: "Home",
    },
  },
];

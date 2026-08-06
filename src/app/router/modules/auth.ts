import type { RouteRecordRaw } from "vue-router";

export const authRoutes: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: () => import("@/features/auth/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/auth/login",
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/features/auth/pages/LoginPage.vue"),
      },
    ],
  },
];

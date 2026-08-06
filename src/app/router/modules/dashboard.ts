import type { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/features/dashboard/pages/DashboardPage.vue"),
    meta: {
      title: "Dashboard",
    },
  },
];

import { homeRoutes } from "./modules/home";
import { authRoutes } from "./modules/auth";
import { dashboardRoutes } from "./modules/dashboard";

export const routes = [
    ...authRoutes,
    ...homeRoutes,
    ...dashboardRoutes,
];
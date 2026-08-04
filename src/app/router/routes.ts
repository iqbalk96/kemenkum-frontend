import { homeRoutes } from "./modules/home";
import { authRoutes } from "./modules/auth";

export const routes = [
    ...authRoutes,
    ...homeRoutes,
];
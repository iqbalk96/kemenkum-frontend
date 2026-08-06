import type { App } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import { queryClient } from "@/shared/lib/query-client";

export function setupQuery(app: App) {
  app.use(VueQueryPlugin, {
    queryClient,
  });
}

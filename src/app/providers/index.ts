import type { App } from "vue";

import { setupQuery } from "./query";
import { setupPinia } from "./pinia";

export function setupProviders(app: App) {
  setupQuery(app);

  setupPinia(app)
  // setupToast(app)
  // setupI18n(app)
}
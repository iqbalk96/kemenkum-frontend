import { defineStore } from "pinia";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  theme: ThemeMode;
  sidebarCollapsed: boolean;
  locale: string;
}

export const useThemeStore = defineStore("theme", {
  state: (): ThemeState => ({
    theme: "system",
    sidebarCollapsed: false,
    locale: "id",
  }),

  actions: {
    setTheme(theme: ThemeMode) {
      this.theme = theme;
    },

    toggleTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },

    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },

    setLocale(locale: string) {
      this.locale = locale;
    },
  },
});

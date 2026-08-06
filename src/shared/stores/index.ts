import { defineStore } from "pinia";

interface AppState {
    loading: boolean;
    pageTitle: string;
    breadcrumbs: string[];
}

export const useAppStore = defineStore("app", {
    state: (): AppState => ({
        loading: false,
        pageTitle: "",
        breadcrumbs: [],
    }),

    actions: {
        setLoading(value: boolean) {
            this.loading = value;
        },

        setPageTitle(title: string) {
            this.pageTitle = title;
        },

        setBreadcrumbs(items: string[]) {
            this.breadcrumbs = items;
        },

        reset() {
            this.loading = false;
            this.pageTitle = "";
            this.breadcrumbs = [];
        },
    },
});
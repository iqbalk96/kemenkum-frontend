<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface Props {
  parent?: string;
  title: string;
}

withDefaults(defineProps<Props>(), {
  parent: "",
});
</script>

<template>
  <SidebarProvider>
    <AppSidebar />

    <SidebarInset>
      <AppHeader :parent="parent" :title="title" />

      <main class="flex flex-1 flex-col gap-4 pt-0 bg-neutral-100">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>

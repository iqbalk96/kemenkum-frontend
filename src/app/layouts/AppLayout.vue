<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <Card class="mt-5 border-0 shadow-none bg-transparent">
          <CardHeader>
            <CardTitle>
              <slot name="title">{{ title }}</slot>
            </CardTitle>
            <CardDescription>
              <slot name="description" />
            </CardDescription>
            <CardAction>
              <slot name="action" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <div class="px-6 py-4 bg-card rounded-lg">
              <slot />
            </div>
          </CardContent>
        </Card>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>

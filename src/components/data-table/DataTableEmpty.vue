<script setup lang="ts">
import { Database } from "@lucide/vue";

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "No data found",
    description: "Try changing your search or filters.",
  },
);
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="rounded-full border bg-muted p-3">
      <Database class="h-6 w-6 text-muted-foreground" />
    </div>

    <h3 class="mt-4 text-base font-semibold">
      {{ title }}
    </h3>

    <p class="mt-1 max-w-sm text-sm text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>

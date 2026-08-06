<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";

defineProps<{
  columns?: number;
  rows?: number;
}>();
</script>

<template>
    <div class="overflow-hidden rounded-md border">
      <div
        v-for="row in rows ?? 10"
        :key="row"
        class="grid grid-cols-3 items-center gap-6 border-b px-4 py-3 last:border-b-0"
      >
        <Skeleton class="h-4 w-10 rounded-md" />
        <Skeleton class="h-4 w-48 rounded-md" />
        <Skeleton class="h-4 w-64 rounded-md" />
      </div>
    </div>
  </template>
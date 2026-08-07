<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card";

interface Props {
  title: string;
  description?: string;
  contentClass?: string;
}

withDefaults(defineProps<Props>(), {
  description: "",
  contentClass: "px-6 py-4 bg-card rounded-lg",
});
</script>

<template>
  <Card class="mt-5 border-0 bg-transparent shadow-none">
    <CardHeader>
      <div class="space-y-1">
        <CardTitle>{{ title }}</CardTitle>
        <CardDescription v-if="description">
          {{ description }}
        </CardDescription>
      </div>

      <CardAction v-if="$slots.action">
        <slot name="action" />
      </CardAction>
    </CardHeader>

    <CardContent>
      <div :class="contentClass">
        <slot />
      </div>
    </CardContent>
  </Card>
</template>

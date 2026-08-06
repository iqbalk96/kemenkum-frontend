<script setup lang="ts" generic="TData">
import type { Table } from "@tanstack/vue-table";

import { Input } from "@/components/ui/input";

interface Props<TData> {
  table: Table<TData>;
  searchColumn: string;
  searchPlaceholder?: string;
}

const props = withDefaults(defineProps<Props<TData>>(), {
  searchPlaceholder: "Search...",
});
</script>

<template>
  <div class="flex items-center py-4">
    <Input
      class="max-w-sm"
      :placeholder="props.searchPlaceholder"
      :model-value="
        (props.table
          .getColumn(props.searchColumn)
          ?.getFilterValue() as string) ?? ''
      "
      @update:model-value="
        (value) =>
          props.table.getColumn(props.searchColumn)?.setFilterValue(value)
      "
    />
  </div>
</template>

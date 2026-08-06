<script setup lang="ts" generic="TData">
import type { Table } from "@tanstack/vue-table";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "@lucide/vue";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props<TData> {
  table: Table<TData>;
}

const props = defineProps<Props<TData>>();
</script>

<template>
  <div class="flex items-center justify-between px-2 py-4">
    <div class="text-sm text-muted-foreground">
      {{ table.getFilteredRowModel().rows.length }}
      row(s)
    </div>

    <div class="flex items-center gap-6">
      <!-- Rows per page -->
      <div class="flex items-center gap-2">
        <p class="text-sm font-medium">Rows per page</p>

        <Select
          :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="(value) => table.setPageSize(Number(value))"
        >
          <SelectTrigger class="h-8 w-[80px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="10"> 10 </SelectItem>

            <SelectItem value="20"> 20 </SelectItem>

            <SelectItem value="50"> 50 </SelectItem>

            <SelectItem value="100"> 100 </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <!-- Page info -->

      <div class="w-[100px] text-center text-sm font-medium">
        Page
        {{ table.getState().pagination.pageIndex + 1 }}

        of

        {{ table.getPageCount() }}
      </div>

      <!-- Navigation -->

      <div class="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)"
        >
          <ChevronsLeft class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <ChevronLeft class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <ChevronRight class="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <ChevronsRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>

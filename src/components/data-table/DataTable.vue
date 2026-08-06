<script setup lang="ts" generic="TData">
import { ref } from "vue";
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type ColumnFiltersState,
  type SortingState,
  useVueTable,
  getPaginationRowModel,
} from "@tanstack/vue-table";

import type { DataTableProps } from "./types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DataTableToolbar from "./DataTableToolbar.vue";
import DataTablePagination from "./DataTablePagination.vue";
import DataTableSkeleton from "./DataTableSkeleton.vue";
import DataTableEmpty from "./DataTableEmpty.vue";

const props = defineProps<DataTableProps<TData>>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);

const table = useVueTable({
  get data() {
    return props.data;
  },

  get columns() {
    return props.columns;
  },

  state: {
    get sorting() {
      return sorting.value;
    },

    get columnFilters() {
      return columnFilters.value;
    },
  },

  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },

  onColumnFiltersChange: (updaterOrValue) => {
    columnFilters.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(columnFilters.value)
        : updaterOrValue;
  },

  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});
</script>

<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" search-column="name" />

    <DataTableSkeleton
      v-if="props.loading"
      :columns="props.columns.length"
      :rows="10"
    />

    <div v-else class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <template v-if="table.getRowModel().rows.length">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell :colspan="props.columns.length" class="p-0">
              <DataTableEmpty
                :title="props.emptyTitle"
                :description="props.emptyDescription"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <DataTablePagination v-if="!props.loading" :table="table" />
  </div>
</template>

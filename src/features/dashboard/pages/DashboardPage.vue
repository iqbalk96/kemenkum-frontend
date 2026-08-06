<script setup lang="ts">
import { h } from "vue";
import { DataTable, DataTableColumnHeader } from "@/components/data-table";

import type { ColumnDef } from "@tanstack/vue-table";

interface User {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Albert",
    email: "albert@example.com",
  },
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) =>
      h(DataTableColumnHeader, {
        column,
        title: "ID",
      }),
  },
  {
    accessorKey: "name",
    filterFn: "includesString",
    header: ({ column }) =>
      h(DataTableColumnHeader, {
        column,
        title: "Name",
      }),
  },
  {
    accessorKey: "email",
    filterFn: "includesString",
    header: ({ column }) =>
      h(DataTableColumnHeader, {
        column,
        title: "Email",
      }),
  },
];
</script>

<template>
  <DataTable :columns="columns" :data="data" />
</template>

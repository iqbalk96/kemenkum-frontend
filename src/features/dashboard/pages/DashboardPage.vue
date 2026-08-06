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
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Albert Johnson", email: "albert@example.com" },
  { id: 4, name: "Michael Brown", email: "michael@example.com" },
  { id: 5, name: "Emily Davis", email: "emily@example.com" },
  { id: 6, name: "William Wilson", email: "william@example.com" },
  { id: 7, name: "Olivia Martinez", email: "olivia@example.com" },
  { id: 8, name: "James Anderson", email: "james@example.com" },
  { id: 9, name: "Sophia Taylor", email: "sophia@example.com" },
  { id: 10, name: "Benjamin Thomas", email: "benjamin@example.com" },
  { id: 11, name: "Charlotte Moore", email: "charlotte@example.com" },
  { id: 12, name: "Lucas Jackson", email: "lucas@example.com" },
  { id: 13, name: "Amelia White", email: "amelia@example.com" },
  { id: 14, name: "Henry Harris", email: "henry@example.com" },
  { id: 15, name: "Mia Martin", email: "mia@example.com" },
  { id: 16, name: "Alexander Thompson", email: "alexander@example.com" },
  { id: 17, name: "Evelyn Garcia", email: "evelyn@example.com" },
  { id: 18, name: "Daniel Martinez", email: "daniel@example.com" },
  { id: 19, name: "Harper Robinson", email: "harper@example.com" },
  { id: 20, name: "Matthew Clark", email: "matthew@example.com" },
  { id: 21, name: "Abigail Lewis", email: "abigail@example.com" },
  { id: 22, name: "David Walker", email: "david@example.com" },
  { id: 23, name: "Ella Hall", email: "ella@example.com" },
  { id: 24, name: "Joseph Allen", email: "joseph@example.com" },
  { id: 25, name: "Grace Young", email: "grace@example.com" },
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
  <DataTable :columns="columns" :data="data" :loading="false" />
</template>

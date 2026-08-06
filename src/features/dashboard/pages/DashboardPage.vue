<script setup lang="ts">
import { DataTable } from "@/components/data-table";
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
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
</script>

<template>
  <DataTable
    :columns="columns"
    :data="data"
  />
</template>
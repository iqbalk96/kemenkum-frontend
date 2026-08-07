<script setup lang="ts">
import { DataTable } from "@/components/data-table";
import { columns } from "../table/columns";
import { data } from "../table/data";
</script>

<template>
  <DataTable :columns="columns" :data="data" />
</template>

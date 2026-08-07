<script setup lang="ts">
import AppLayout from "@/app/layouts/AppLayout.vue";
import { Plus } from "@lucide/vue";
import { Button } from "@/components/ui/button";
import TableSection from "../components/TableSection.vue";
</script>

<template>
  <AppLayout parent="Pengguna" title="Data Pengguna">
    <template #title> Pengguna </template>

    <template #description>
      Mengelola akun pengguna, peran, dan hak akses dalam sistem.
    </template>

    <template #action>
      <Button>
        <Plus class="size-4" />
        Tambah Anggota
      </Button>
    </template>

    <TableSection />
  </AppLayout>
</template>

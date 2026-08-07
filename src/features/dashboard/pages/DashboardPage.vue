<script setup lang="ts">
import AppLayout from "@/app/layouts/AppLayout.vue";
import { Plus } from "@lucide/vue";
import { Button } from "@/components/ui/button";
import TableSection from "../components/TableSection.vue";
import AppCard from "@/components/ui/app-card/AppCard.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppLayout parent="Pengguna" title="Data Pengguna">
    <AppCard
      title="Pengguna"
      description="Mengelola akun pengguna, peran, dan hak akses dalam sistem."
    >
      <template #action>
        <Button as-child>
          <RouterLink :to="{ name: 'dashboard-create' }">
            <Plus class="size-4" />
            Tambah Pengguna
          </RouterLink>
        </Button>
      </template>

      <TableSection />
    </AppCard>
  </AppLayout>
</template>

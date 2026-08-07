<script setup lang="ts">
import AppLayout from "@/app/layouts/AppLayout.vue";
import AppCard from "@/components/ui/app-card/AppCard.vue";
</script>

<template>
  <AppLayout parent="Pengguna" title="Tambah Pengguna">
    <AppCard
      title="Tambah Pengguna"
      description="Ikuti setiap langkah untuk melengkapi data pengguna."
    >
      <h1>Stepper</h1>
      <h2>User Form</h2>
    </AppCard>
  </AppLayout>
</template>

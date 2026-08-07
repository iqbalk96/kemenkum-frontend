<script setup lang="ts">
import AppLayout from "@/app/layouts/AppLayout.vue";
import AppCard from "@/components/ui/app-card/AppCard.vue";
import Stepper from "../components/Stepper.vue";
import StepBasicInformation from "../components/form/StepBasicInformation.vue";
</script>

<template>
  <AppLayout parent="Pengguna" title="Tambah Pengguna">
    <AppCard
      title="Tambah Pengguna"
      description="Ikuti setiap langkah untuk melengkapi data pengguna."
    >
      <div class="mt-5">
        <Stepper />
      </div>

      <!-- Steps 1 -->
      <div class="mt-8">
        <StepBasicInformation />
      </div>
    </AppCard>
  </AppLayout>
</template>

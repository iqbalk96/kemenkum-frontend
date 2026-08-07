<script setup lang="ts">
import AppLayout from "@/app/layouts/AppLayout.vue";
import AppCard from "@/components/ui/app-card/AppCard.vue";
import Stepper from "../components/Stepper.vue";
import StepBasicInformation from "../components/form/StepBasicInformation.vue";
import StepAccessPermission from "../components/form/StepAccessPermission.vue";
import StepReview from "../components/form/StepReview.vue";

import { ref } from "vue";

const currentStep = ref(1);
</script>

<template>
  <AppLayout parent="Pengguna" title="Tambah Pengguna">
    <AppCard
      title="Tambah Pengguna"
      description="Ikuti setiap langkah untuk melengkapi data pengguna."
    >
      <div class="mt-5">
        <Stepper v-model="currentStep" />
      </div>

      <!-- Step 1 -->
      <div v-if="currentStep === 1" class="mt-8">
        <StepBasicInformation />
      </div>

      <!-- Step 2 -->
      <div v-else-if="currentStep === 2" class="mt-8">
        <StepAccessPermission />
      </div>

      <!-- Step 3 -->
      <div v-else-if="currentStep === 3" class="mt-8">
        <StepReview />
      </div>
    </AppCard>
  </AppLayout>
</template>

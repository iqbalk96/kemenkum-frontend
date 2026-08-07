<script setup lang="ts">
import { Check, Circle, Dot } from "@lucide/vue";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Informasi Dasar",
    description: "Masukkan identitas dan informasi akun pengguna",
  },
  {
    step: 2,
    title: "Hak Akses",
    description: "Tentukan peran, unit kerja, dan hak akses pengguna",
  },
  {
    step: 3,
    title: "Tinjau Data",
    description: "Periksa kembali seluruh informasi sebelum menyimpan",
  },
];

const props = defineProps<{
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const changeStep = (step: number) => {
  emit("update:modelValue", step);
};
</script>

<template>
  <Stepper class="flex w-full items-start gap-2">
    <StepperItem
      v-for="step in steps"
      :key="step.step"
      v-slot="{ state }"
      class="relative flex w-full flex-col items-center justify-center"
      :step="step.step"
    >
      <StepperSeparator
        v-if="step.step !== steps[steps.length - 1]?.step"
        class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />

      <StepperTrigger as-child>
        <Button
          @click="changeStep(step.step)"
          :variant="
            state === 'completed' || state === 'active' ? 'default' : 'outline'
          "
          size="icon"
          class="z-10 rounded-full shrink-0"
          :class="[
            state === 'active' &&
              'ring-2 ring-ring ring-offset-2 ring-offset-background',
          ]"
        >
          <Check v-if="state === 'completed'" class="size-5" />
          <Circle v-if="state === 'active'" />
          <Dot v-if="state === 'inactive'" />
        </Button>
      </StepperTrigger>

      <div class="mt-5 flex flex-col items-center text-center">
        <StepperTitle
          :class="[state === 'active' && 'text-primary']"
          class="text-sm font-semibold transition lg:text-base"
        >
          {{ step.title }}
        </StepperTitle>
        <StepperDescription
          :class="[state === 'active' && 'text-primary']"
          class="sr-only text-xs text-muted-foreground transition md:not-sr-only lg:text-sm"
        >
          {{ step.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </Stepper>
</template>

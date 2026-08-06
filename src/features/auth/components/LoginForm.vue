<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useAuthStore } from "@/shared/stores/auth.store";
import {
  loginSchema,
  type LoginSchema,
} from "@/features/auth/schemas/login.schema";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const authStore = useAuthStore();

const form = useForm<LoginSchema>({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: "",
    password: "",
  },
});

const onSubmit = form.handleSubmit((values) => {
  authStore.setUser({
    id: 1,
    name: "Demo User",
    email: values.email,
  });

  form.resetForm({
    values: {
      email: "",
      password: "",
    },
  });
});

</script>

<template>
  <form
    :class="cn('flex flex-col gap-6', props.class)"
    @submit="onSubmit"
  >
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-2xl font-bold">
          Login to your account
        </h1>

        <p class="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <!-- Email -->
      <FormField
        v-slot="{ componentField }"
        name="email"
      >
        <FormItem>
          <FormLabel>Email</FormLabel>

          <FormControl>
            <Input
              type="email"
              placeholder="m@example.com"
              v-bind="componentField"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Password -->
      <FormField
        v-slot="{ componentField }"
        name="password"
      >
        <FormItem>
          <div class="flex items-center">
            <FormLabel>Password</FormLabel>

            <a
              href="#"
              class="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <FormControl>
            <Input
              type="password"
              v-bind="componentField"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      </FormField>

      <Field>
        <Button
          type="submit"
          class="w-full"
        >
          Login
        </Button>
      </Field>

      <!-- Demo Pinia -->
      <Field v-if="authStore.isAuthenticated">
        <div class="rounded-lg border bg-muted/50 p-4">
          <p class="font-medium">
            Login Success
          </p>

          <div class="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>
              <span class="font-medium text-foreground">Name :</span>
              {{ authStore.user?.name }}
            </p>

            <p>
              <span class="font-medium text-foreground">Email :</span>
              {{ authStore.user?.email }}
            </p>
          </div>

          <Button
            class="mt-4 w-full"
            variant="destructive"
            @click="authStore.clear()"
          >
            Logout
          </Button>
        </div>
      </Field>

      <FieldSeparator>
        Or continue with
      </FieldSeparator>

      <Field>
        <Button
          type="button"
          variant="outline"
        >
          Login with GitHub
        </Button>

        <FieldDescription class="text-center">
          Don't have an account?
          <a href="#">Sign up</a>
        </FieldDescription>
      </Field>
    </FieldGroup>
  </form>
</template>
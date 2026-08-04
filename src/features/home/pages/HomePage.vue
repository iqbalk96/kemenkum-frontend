<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@lucide/vue";
</script>

<template>
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
        <!-- Background -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_55%)]" />

        <div
            class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
            <span
                class="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1 text-sm text-muted-foreground backdrop-blur">
                Vue 3 • TypeScript • Shadcn Vue
            </span>

            <h1 class="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Coming
                <span class="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Soon.
                </span>
            </h1>

            <p class="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                A modern dashboard boilerplate built with Vue 3, TypeScript,
                Tailwind CSS, shadcn-vue, and Feature-Based Architecture.
            </p>

            <div class="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" class="gap-2">
                    Get Started
                    <ArrowRight class="h-4 w-4" />
                </Button>

                <Button variant="outline" size="lg">
                    Documentation
                </Button>
            </div>

            <div class="mt-24 flex flex-wrap items-center justify-center gap-10 text-sm text-muted-foreground">
                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-foreground">Vue 3</span>
                    <span>Composition API</span>
                </div>

                <div class="hidden h-10 w-px bg-border md:block" />

                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-foreground">TypeScript</span>
                    <span>Strict Mode</span>
                </div>

                <div class="hidden h-10 w-px bg-border md:block" />

                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-foreground">
                        shadcn-vue
                    </span>
                    <span>Modern UI</span>
                </div>

                <div class="hidden h-10 w-px bg-border md:block" />

                <div class="flex flex-col">
                    <span class="text-3xl font-semibold text-foreground">
                        Feature-Based
                    </span>
                    <span>Architecture</span>
                </div>
            </div>
        </div>
    </section>
</template>
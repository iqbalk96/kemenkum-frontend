<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface Props {
  parent?: string;
  title: string;
  parentHref?: string;
}

withDefaults(defineProps<Props>(), {
  parent: "",
  parentHref: "#",
});
</script>

<template>
  <header
    class="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />

      <Separator
        orientation="vertical"
        class="mr-2 data-[orientation=vertical]:h-4"
      />

      <Breadcrumb>
        <BreadcrumbList>
          <template v-if="parent">
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink :href="parentHref">
                {{ parent }}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator class="hidden md:block" />
          </template>

          <BreadcrumbItem>
            <BreadcrumbPage>{{ title }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
</template>

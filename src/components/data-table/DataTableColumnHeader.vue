<script setup lang="ts">
import type { Column } from "@tanstack/vue-table";
import type { HTMLAttributes } from "vue";

import { ArrowDown, ArrowUp, ArrowUpDown } from "@lucide/vue";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps {
  column: Column<any, any>;
  title: string;
  class?: HTMLAttributes["class"];
}

const props = defineProps<DataTableColumnHeaderProps>();
</script>

<template>
  <div :class="cn('flex items-center space-x-2', props.class)">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="sm" class="-ml-3 h-8">
          <span>{{ title }}</span>

          <ArrowDown
            v-if="column.getIsSorted() === 'desc'"
            class="ml-2 h-4 w-4"
          />

          <ArrowUp
            v-else-if="column.getIsSorted() === 'asc'"
            class="ml-2 h-4 w-4"
          />

          <ArrowUpDown v-else class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          Asc
        </DropdownMenuItem>

        <DropdownMenuItem @click="column.toggleSorting(true)">
          Desc
        </DropdownMenuItem>

        <DropdownMenuItem @click="column.clearSorting()">
          Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

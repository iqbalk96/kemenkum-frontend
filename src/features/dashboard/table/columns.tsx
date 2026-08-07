import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "@lucide/vue";
import { h } from "vue";
import { DataTableColumnHeader } from "@/components/data-table";

import type { ColumnDef } from "@tanstack/vue-table";
import type { IUser } from "./types";

export const columns: ColumnDef<IUser>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        "onUpdate:checked": (value: boolean) =>
          table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        "onUpdate:checked": (value: boolean) => row.toggleSelected(!!value),
        ariaLabel: "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "nama",
    filterFn: "includesString",
    header: ({ column }) => h(DataTableColumnHeader, { column, title: "Nama" }),
    cell: ({ row }) => h("div", { class: "font-medium" }, row.getValue("nama")),
  },

  {
    accessorKey: "nip",
    filterFn: "includesString",
    header: ({ column }) => h(DataTableColumnHeader, { column, title: "NIP" }),
    cell: ({ row }) =>
      h("span", { class: "font-mono text-sm" }, row.getValue("nip")),
  },

  {
    accessorKey: "email",
    filterFn: "includesString",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Email" }),
    cell: ({ row }) =>
      h("span", { class: "text-muted-foreground" }, row.getValue("email")),
  },

  {
    accessorKey: "unitKerja",
    filterFn: "includesString",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Unit Kerja" }),
    cell: ({ row }) => h("span", null, row.getValue("unitKerja")),
  },

  {
    accessorKey: "peran",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Peran" }),
    cell: ({ row }) => {
      const role = row.getValue("peran") as IUser["peran"];

      const variant =
        role === "Administrator"
          ? "default"
          : role === "Operator"
            ? "secondary"
            : "outline";

      return h(
        Badge,
        {
          variant,
          class: "rounded-full px-3",
        },
        () => role,
      );
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) =>
      h(DataTableColumnHeader, { column, title: "Status" }),
    cell: ({ row }) => {
      const status = row.getValue("status") as IUser["status"];

      return h(
        Badge,
        {
          variant: status === "Aktif" ? "default" : "destructive",
          class: "rounded-full px-3",
        },
        () => status,
      );
    },
  },

  {
    id: "actions",
    cell: () =>
      h(
        Button,
        {
          variant: "ghost",
          size: "icon",
        },
        () => h(MoreVertical, { class: "size-4" }),
      ),
    enableSorting: false,
    enableHiding: false,
  },
];

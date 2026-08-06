import type { ColumnDef } from "@tanstack/vue-table";

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
}
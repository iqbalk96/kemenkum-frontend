import type { ColumnDef, Table } from "@tanstack/vue-table";

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
}

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

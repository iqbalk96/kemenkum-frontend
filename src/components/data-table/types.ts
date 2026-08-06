import type { ColumnDef, Table } from "@tanstack/vue-table";

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];

  loading?: boolean;

  searchColumn?: string;
  searchPlaceholder?: string;
}

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}
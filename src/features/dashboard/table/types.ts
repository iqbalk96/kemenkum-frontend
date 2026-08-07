export interface IUser {
  id: number;
  nama: string;
  nip: string;
  email: string;
  unitKerja: string;
  peran: "Administrator" | "Operator" | "Viewer";
  status: "Aktif" | "Nonaktif";
}

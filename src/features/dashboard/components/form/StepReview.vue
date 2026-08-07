<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

const basicInformation = {
  fullName: "Iqbal Kurniawan",
  username: "iqbal.k",
  email: "iqbal.kurniawan@kemenkum.go.id",
  phone: "081234567890",
  gender: "Laki-laki",
  religion: "Islam",
};

const accessInformation = {
  role: "Administrator",
  unit: "Sekretariat Jenderal",
  category: "Internal",
  status: "Aktif",
};
</script>

<template>
  <div class="space-y-6">
    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Tinjau Data</CardTitle>

        <CardDescription>
          Pastikan seluruh informasi yang telah diisi sudah benar sebelum
          menyimpan data pengguna.
        </CardDescription>
      </CardHeader>
    </Card>

    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Informasi Dasar</CardTitle>
      </CardHeader>

      <CardContent class="grid gap-6 md:grid-cols-2">
        <div>
          <p class="text-sm text-muted-foreground">Nama Lengkap</p>
          <p class="font-medium">{{ basicInformation.fullName }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Username</p>
          <p class="font-medium">{{ basicInformation.username }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Email</p>
          <p class="font-medium">{{ basicInformation.email }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Nomor Handphone</p>
          <p class="font-medium">{{ basicInformation.phone }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Jenis Kelamin</p>
          <p class="font-medium">{{ basicInformation.gender }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Agama</p>
          <p class="font-medium">{{ basicInformation.religion }}</p>
        </div>
      </CardContent>
    </Card>

    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Hak Akses</CardTitle>
      </CardHeader>

      <CardContent class="grid gap-6 md:grid-cols-2">
        <div>
          <p class="text-sm text-muted-foreground">Peran</p>
          <p class="font-medium">{{ accessInformation.role }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Unit Kerja</p>
          <p class="font-medium">{{ accessInformation.unit }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Kategori</p>
          <p class="font-medium">{{ accessInformation.category }}</p>
        </div>

        <div>
          <p class="text-sm text-muted-foreground">Status</p>

          <Badge>
            {{ accessInformation.status }}
          </Badge>
        </div>
      </CardContent>
    </Card>

    <Separator />

    <div
      class="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground"
    >
      Dengan menekan tombol <strong>Simpan</strong>, data pengguna akan
      ditambahkan ke dalam sistem dan dapat digunakan sesuai hak akses yang
      diberikan.
    </div>
  </div>
</template>

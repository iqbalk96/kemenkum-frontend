<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>

<template>
  <div class="space-y-6">
    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Hak Akses</CardTitle>
        <CardDescription>
          Tentukan peran, unit kerja, dan hak akses pengguna dalam sistem.
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-6 md:grid-cols-2">
        <!-- Peran -->
        <div class="space-y-2">
          <Label for="role">Peran</Label>

          <Select>
            <SelectTrigger id="role" class="w-full">
              <SelectValue placeholder="Pilih peran" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="administrator"> Administrator </SelectItem>

              <SelectItem value="editor"> Editor </SelectItem>

              <SelectItem value="operator"> Operator </SelectItem>

              <SelectItem value="viewer"> Viewer </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Unit Kerja -->
        <div class="space-y-2">
          <Label for="unit">Unit Kerja</Label>

          <Select>
            <SelectTrigger id="unit" class="w-full">
              <SelectValue placeholder="Pilih unit kerja" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="sekretariat">
                Sekretariat Jenderal
              </SelectItem>

              <SelectItem value="kepegawaian"> Biro Kepegawaian </SelectItem>

              <SelectItem value="hukum"> Biro Hukum </SelectItem>

              <SelectItem value="pusat-data"> Pusat Data </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Kategori -->
        <div class="space-y-2">
          <Label for="category">Kategori</Label>

          <Select>
            <SelectTrigger id="category" class="w-full">
              <SelectValue placeholder="Pilih kategori" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="internal"> Internal </SelectItem>

              <SelectItem value="eksternal"> Eksternal </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Status -->
        <div class="space-y-2">
          <Label for="status">Status</Label>

          <Select>
            <SelectTrigger id="status" class="w-full">
              <SelectValue placeholder="Pilih status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="aktif"> Aktif </SelectItem>

              <SelectItem value="nonaktif"> Nonaktif </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
</script>

<template>
  <div class="space-y-6">
    <!-- Informasi Akun -->
    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Informasi Akun</CardTitle>
        <CardDescription>
          Masukkan data akun yang akan digunakan untuk masuk ke sistem.
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-6 md:grid-cols-2">
        <div class="space-y-2">
          <Label>Nama Lengkap</Label>
          <Input placeholder="Masukkan nama lengkap" />
        </div>

        <div class="space-y-2">
          <Label>Username</Label>
          <Input placeholder="Masukkan username" />
        </div>

        <div class="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Masukkan email" />
        </div>

        <div class="space-y-2">
          <Label>Nomor Handphone</Label>
          <Input placeholder="08xxxxxxxxxx" />
        </div>
      </CardContent>
    </Card>

    <!-- Informasi Pribadi -->
    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Informasi Pribadi</CardTitle>
        <CardDescription> Data identitas dasar pengguna. </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-6 md:grid-cols-2">
        <div class="space-y-2">
          <Label>Jenis Kelamin</Label>

          <RadioGroup default-value="L">
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="L" id="male" />
              <Label for="male">Laki-laki</Label>
            </div>

            <div class="flex items-center space-x-2">
              <RadioGroupItem value="P" id="female" />
              <Label for="female">Perempuan</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="space-y-2">
          <Label>Agama</Label>

          <Select>
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Pilih agama" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="islam">Islam</SelectItem>
              <SelectItem value="kristen">Kristen</SelectItem>
              <SelectItem value="katolik">Katolik</SelectItem>
              <SelectItem value="hindu">Hindu</SelectItem>
              <SelectItem value="buddha">Buddha</SelectItem>
              <SelectItem value="konghucu">Konghucu</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>

    <!-- Status -->
    <Card class="border-0 rounded-lg">
      <CardHeader>
        <CardTitle>Status Pengguna</CardTitle>
        <CardDescription>
          Tentukan apakah akun dapat digunakan setelah dibuat.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div>
            <p class="font-medium">Pengguna Aktif</p>
            <p class="text-sm text-muted-foreground">
              Pengguna dapat langsung masuk ke sistem.
            </p>
          </div>

          <Switch />
        </div>
      </CardContent>
    </Card>
  </div>
</template>

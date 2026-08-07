<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";

import {
  Activity,
  BarChart3,
  Database,
  FileText,
  Home,
  Settings2,
} from "@lucide/vue";
import NavMain from "@/app/layouts/components/NavMain.vue";
import NavUser from "@/app/layouts/components/NavUser.vue";
import TeamSwitcher from "@/app/layouts/components/TeamSwitcher.vue";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import Logo from "/logo.png";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const data = {
  user: {
    name: "Iqbal Kurniawan",
    email: "iqbal.kurniawan@kemenkum.go.id",
    avatar: "/avatars/iqbal.jpg",
  },

  teams: [
    {
      name: "Sistem Tata Kelola",
      logo: Logo,
      plan: "Regulasi",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
    },

    {
      title: "Master Data",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        {
          title: "Pengguna",
          url: "#",
        },
        {
          title: "Peran",
          url: "#",
        },
        {
          title: "Hak Akses",
          url: "#",
        },
        {
          title: "Unit Kerja",
          url: "#",
        },
        {
          title: "Jenis Regulasi",
          url: "#",
        },
      ],
    },

    {
      title: "Regulasi",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Daftar Regulasi",
          url: "#",
        },
        {
          title: "Draft Regulasi",
          url: "#",
        },
        {
          title: "Harmonisasi",
          url: "#",
        },
        {
          title: "Publikasi",
          url: "#",
        },
      ],
    },

    {
      title: "Monitoring",
      url: "#",
      icon: Activity,
      items: [
        {
          title: "Progres Regulasi",
          url: "#",
        },
        {
          title: "Audit Trail",
          url: "#",
        },
      ],
    },

    {
      title: "Laporan",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "Statistik",
          url: "#",
        },
        {
          title: "Rekapitulasi",
          url: "#",
        },
      ],
    },

    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profil",
          url: "#",
        },
        {
          title: "Konfigurasi",
          url: "#",
        },
      ],
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

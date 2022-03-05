<template>
  <component :is="layout"></component>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import ClientLayout from "@/layouts/ClientLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import FilterLayout from "@/layouts/FilterLayout.vue";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: { AuthLayout, ClientLayout, AdminLayout, FilterLayout },
  created() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  },
};
</script>

<style></style>

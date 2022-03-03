<template>
  <div class="dark:bg-black-900 dark:text-black-200 container">
    <div class="admin dark:bg-black-900 min-h-screen">
      <router-view></router-view>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Admin/Menu.vue";
export default {
  components: { Menu },
};
</script>

<style></style>

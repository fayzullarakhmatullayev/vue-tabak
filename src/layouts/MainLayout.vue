<template>
  <div class="dark:bg-black-900 dark:text-black-200 container">
    <Navbar :isBackOpen="isBackOpen" :isNotification="isNotification" />
    <div class="dark:bg-black-900 min-h-screen">
      <router-view></router-view>
    </div>
    <Menu v-if="isNotification" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Menu,
  },
  computed: {
    isBackOpen() {
      if (this.$route.path === "/catalog") {
        return (this.$store.state.isBackOpen = false);
      } else {
        return (this.$store.state.isBackOpen = true);
      }
    },
    isNotification() {
      if (
        this.$route.path === "/notification" ||
        this.$route.path === "/notification-settings"
      ) {
        return (this.$store.state.isNotification = false);
      } else {
        return (this.$store.state.isNotification = true);
      }
    },
  },
};
</script>

<style></style>

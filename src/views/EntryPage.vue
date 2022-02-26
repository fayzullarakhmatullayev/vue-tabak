<template>
  <div class="auth">
    <img
      src="@/assets/img/icons/logo-big.svg"
      alt="logo-big"
      v-if="isDarkTheme"
    />
    <img
      src="@/assets/img/icons/light-big-logo.svg"
      alt="light-big-logo"
      v-else
    />

    <div class="auth-warpper">
      <button
        class="dark:bg-blueish text-black-900 border-black-900 mb-3 rounded border dark:text-white"
        @click="$router.push('/register')"
      >
        Регистрация
      </button>
      <button
        class="dark:bg-blueish text-black-900 border-black-900 mb-3 rounded border dark:text-white"
        @click="$router.push('/auth')"
      >
        Авторизация
      </button>
    </div>
    <div class="auth-bottom">
      <router-link to="/auth" class="text-blueish">Войти</router-link> как
      администратор
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isDarkTheme() {
      if (document.querySelector("html").classList.contains("dark")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>

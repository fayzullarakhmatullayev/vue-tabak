<template>
  <div class="registration login">
    <img
      src="@/assets/img/icons/logo-big.svg"
      alt="logo-big"
      v-if="isDarkTheme"
      class="logo"
    />
    <img
      src="@/assets/img/icons/light-big-logo.svg"
      alt="light-big-logo"
      class="logo"
      v-else
    />
    <h1 class="title">Авторизация</h1>
    <form class="form">
      <div class="form-control noafter">
        <label for="email">E-mail/телефон</label>
        <input
          type="text"
          placeholder="ivan@mail.ru"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="email"
        />
      </div>
      <div class="form-control noafter">
        <label for="lname">Пароль</label>
        <input
          type="password"
          placeholder="sda123"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="lname"
        />
      </div>
      <button
        class="dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white submit"
        type="submit"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
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

<template>
  <div class="registration">
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
    <h1 class="title">Регистрация</h1>
    <form class="form">
      <div class="form-control">
        <label for="fname">Имя</label>
        <input
          type="text"
          placeholder="Иван"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="fname"
        />
      </div>
      <div class="form-control">
        <label for="lname">Фамилия</label>
        <input
          type="text"
          placeholder="Иванов"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="lname"
        />
      </div>
      <div class="form-control">
        <label for="phone">Телефон</label>
        <input
          type="tel"
          placeholder="89657458587"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="phone"
        />
      </div>
      <div class="form-control">
        <label for="email">Почта</label>
        <input
          type="email"
          placeholder="ivanIvanovich1@gmai.com"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="email"
        />
      </div>
      <div class="form-control noafter">
        <label for="password">Пароль</label>
        <input
          type="password"
          placeholder="проыв145"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="password"
        />
      </div>
      <div class="form-control noafter">
        <label for="repassword">Повторите пароль</label>
        <input
          type="password"
          placeholder="проыв145"
          class="border-black-700 dark:bg-black-900 w-full rounded-lg"
          id="repassword"
        />
      </div>
      <button
        class="dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white submit"
        type="submit"
      >
        Зарегистрироваться
      </button>
      <div class="checkbox">
        <div
          class="checkbox-container border-black-700"
          @click="checked = !checked"
        >
          <img
            src="@/assets/img/icons/check.svg"
            alt="check"
            v-if="isDarkTheme"
            :class="{ active: checked }"
          />
          <img
            src="@/assets/img/icons/check-black.svg"
            alt="check-black"
            :class="{ active: checked }"
            v-else
          />
        </div>
        <div class="checkbox-content">
          Я согласен с <a href="#">Политикой конфиденциальности</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
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

<template>
  <div class="dark:bg-black-900 fixed top-0 z-50 w-[calc(100%-1rem)] bg-white">
    <div class="relative flex h-16 items-center justify-between">
      <div class="back">
        <div
          class="back-inner"
          @click="$router.go(-1)"
          v-if="$store.state.isBackOpen"
        >
          <img
            src="../assets/img/icons/arrow-left.svg"
            alt="arrow-left"
            v-if="isDarkTheme"
          />
          <img
            src="../assets/img/icons/arrow-left-black.svg"
            alt="arrow-left-black"
            v-else
          />
          <span>Назад</span>
        </div>
      </div>
      <img src="../assets/img/icons/logo.svg" alt="logo" v-if="isDarkTheme" />
      <img src="../assets/img/icons/logo-black.svg" alt="logo-black" v-else />
      <div class="flex items-center">
        <div class="relative mr-3">
          <span
            class="bg-blueish absolute -top-2 -right-1.5 rounded-full px-1.5 text-xs font-semibold leading-5 text-white"
          >
            2
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 22"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-black-900 h-6 w-6 dark:stroke-white"
          >
            <path d="M1 21H19" />
            <path
              d="M3.59998 7.38H2C1.45 7.38 1 7.83 1 8.38V17C1 17.55 1.45 18 2 18H3.59998C4.14998 18 4.59998 17.55 4.59998 17V8.38C4.59998 7.83 4.14998 7.38 3.59998 7.38Z"
            />
            <path
              d="M10.8002 4.19H9.2002C8.6502 4.19 8.2002 4.64 8.2002 5.19V17C8.2002 17.55 8.6502 18 9.2002 18H10.8002C11.3502 18 11.8002 17.55 11.8002 17V5.19C11.8002 4.64 11.3502 4.19 10.8002 4.19Z"
            />
            <path
              d="M17.9999 1H16.3999C15.8499 1 15.3999 1.45 15.3999 2V17C15.3999 17.55 15.8499 18 16.3999 18H17.9999C18.5499 18 18.9999 17.55 18.9999 17V2C18.9999 1.45 18.5499 1 17.9999 1Z"
            />
          </svg>
        </div>
        <div class="relative mr-3">
          <span
            class="absolute -top-2 -right-1.5 rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-5 text-white"
          >
            2
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 22"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-black-900 h-6 w-6 dark:stroke-white"
          >
            <path
              d="M9.02009 1.91C5.71009 1.91 3.02009 4.6 3.02009 7.91V10.8C3.02009 11.41 2.76009 12.34 2.45009 12.86L1.30009 14.77C0.590088 15.95 1.08009 17.26 2.38009 17.7C6.69009 19.14 11.3401 19.14 15.6501 17.7C16.8601 17.3 17.3901 15.87 16.7301 14.77L15.5801 12.86C15.2801 12.34 15.0201 11.41 15.0201 10.8V7.91C15.0201 4.61 12.3201 1.91 9.02009 1.91Z"
            />
            <path
              d="M10.8699 2.2C10.5599 2.11 10.2399 2.04 9.90992 2C8.94992 1.88 8.02992 1.95 7.16992 2.2C7.45992 1.46 8.17992 0.940002 9.01992 0.940002C9.85992 0.940002 10.5799 1.46 10.8699 2.2Z"
            />
            <path
              d="M12.02 18.06C12.02 19.71 10.67 21.06 9.02002 21.06C8.20002 21.06 7.44002 20.72 6.90002 20.18C6.36002 19.64 6.02002 18.88 6.02002 18.06"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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

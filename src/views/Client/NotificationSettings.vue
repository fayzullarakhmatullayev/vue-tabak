<template>
  <div class="pt-16 notification">
    <div class="notification-settings border-b border-black-700">
      <h1 class="notification-title">Настройка уведомлений</h1>
      <div class="notification-subtitle text-black-700">
        Отслеживайте заказы в реальном времени
      </div>
    </div>
    <ul class="menu">
      <li class="menu-list bg-black-300 dark:bg-black-800">
        <div class="menu-content">
          <div class="menu-title">Вклюсить push-уведомления</div>
          <div class="menu-subtitle text-black-700">Уведомления выключены</div>
        </div>
        <img
          class="menu-array"
          src="@/assets/img/icons/arrow-top.svg"
          alt="arrow-right"
          v-if="isDarkTheme"
        />
        <img
          class="menu-array"
          v-else
          src="@/assets/img/icons/arrow-top-black.svg"
          alt="arrow-right"
        />
      </li>
      <li class="menu-list bg-black-300 dark:bg-black-800">
        <div class="menu-content">
          <div class="menu-title">Телефон</div>
          <div class="menu-subtitle text-black-700">89657458587</div>
        </div>
        <img
          class="menu-array"
          src="@/assets/img/icons/arrow-top.svg"
          alt="arrow-right"
          v-if="isDarkTheme"
        />
        <img
          class="menu-array"
          v-else
          src="@/assets/img/icons/arrow-top-black.svg"
          alt="arrow-right"
        />
      </li>
      <li class="menu-list bg-black-300 dark:bg-black-800">
        <div class="menu-content">
          <div class="menu-title">Почта</div>
          <div class="menu-subtitle text-black-700">
            ivanIvanovich1@gmai.com
          </div>
        </div>
        <img
          class="menu-array"
          src="@/assets/img/icons/arrow-top.svg"
          alt="arrow-right"
          v-if="isDarkTheme"
        />
        <img
          class="menu-array"
          v-else
          src="@/assets/img/icons/arrow-top-black.svg"
          alt="arrow-right"
        />
      </li>
    </ul>
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

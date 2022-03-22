<template>
  <h1 class="mb-2">Контрагенты</h1>
  <div class="sales-content__wrapper mb-4">
    <div
      class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg"
      @click="isContragentsOpen = true"
    >
      <div class="sales-content__inner">
        <p class="mb-1">Клиент</p>
        <h3 class="dark:text-black-300">Розничныц пок...</h3>
      </div>
      <svg
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="svg-stroke"
      >
        <path
          d="M5 0.999999L1 6L5 11"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg">
      <div class="sales-content__inner"><h3>Склад мой</h3></div>
    </div>
  </div>
  <input
    type="search"
    placeholder="Сумма"
    class="border-black-800 dark:bg-black-900 w-full rounded-lg sales-payment__search"
  />
  <div class="pb-3 border-b dark:border-black-700 mb-6">
    <div class="sales-payment__select mb-5">
      <div class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg">
        <div class="sales-content__inner"><h3>Безналичный</h3></div>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-stroke"
        >
          <path
            d="M5 0.999999L1 6L5 11"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg">
        <div class="sales-content__inner">
          <p>Дата/Время</p>
          <h4 class="text-white">13.12.2021 13:15</h4>
        </div>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-stroke"
        >
          <path
            d="M5 0.999999L1 6L5 11"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
    <div class="sales-payment__payed">
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3.5L2.5 5L6.5 1"
          stroke="#21B140"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p>Оплата включена</p>
    </div>
  </div>
  <button class="sales-payment__btn rounded-lg">Добавить оплату</button>
  <teleport to="body">
    <div class="modal-order">
      <div
        class="overlay"
        v-if="isContragentsOpen"
        @click="isContragentsOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isContragentsOpen }"
      >
        <div class="title dark:text-white logs-modal__title">Контрагент</div>
        <div class="wrapper">
          <div
            class="border-black-600 border-b dark:text-white logs-modal__link py-2"
            v-for="item in 5"
            :key="item"
          >
            “Дымок”
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isContragentsOpen: false,
    };
  },
};
</script>

<style></style>

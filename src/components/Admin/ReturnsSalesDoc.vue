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
  <div class="sales-content__btns border-b dark:border-black-700">
    <button class="sales-content__btn bg-blueish text-white rounded-lg mb-4">
      Добавить товары</button
    ><button class="sales-content__btn bg-blueish text-white rounded-lg mb-4">
      Привязать документ
    </button>
  </div>
  <ul class="sales-list admin-catalog">
    <li
      class="sales-list__items border-b dark:border-black-700"
      v-for="item in 3"
      :key="item"
    >
      <div class="sales-list__title">
        Жевательный табак Oden’s Cloud Dry 16g
      </div>
      <div class="sales-list__bottom">
        <div class="sales-list__price">258 шт * 1228 руб</div>
        <div class="sales-list__price">316 824 руб</div>
      </div>
      <div class="card-burger" @click="isModalOpen = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </li>
  </ul>
  <teleport to="body">
    <div class="logs-modal">
      <div
        class="overlay"
        v-if="isModalOpen"
        @click="isModalOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-200"
        :class="{ 'sort-active': isModalOpen }"
      >
        <div class="logs-menu">
          <a href="#" class="logs-menu__link">Редактировать</a
          ><a href="#" class="logs-menu__link red">Удалить</a
          ><a href="#" class="logs-menu__link">Отменить</a>
        </div>
      </div>
    </div>
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
      isModalOpen: false,
      isContragentsOpen: false,
    };
  },
};
</script>

<style></style>

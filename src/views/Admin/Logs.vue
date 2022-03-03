<template>
  <div class="logs admin-catalog">
    <div class="catalog-top fixed dark:bg-black-900 bg-white">
      <div class="catalog-top__title logs-title">
        Движение денег
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5L6 1L1 5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="catalog-filter">
        <div class="catalog-filter__btn bg-black-300 dark:bg-black-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 15"
            fill="white"
            class="first-svg"
          >
            <path
              d="M18.3335 0.333374L17.0835 1.58337L16.6668 2.00004L11.6668 7.00004V14.5L7.50017 13.25L7.50016 7.00004L2.91683 2.41671L2.50017 2.00004L0.833496 0.333374H18.3335Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="pt-20 pb-16">
      <div class="logs-search relative mb-2 flex h-8">
        <input
          type="search"
          placeholder="№ документа/контрагент"
          class="border-black-800 dark:bg-black-900 w-full rounded-lg"
        />
        <div
          class="absolute right-0 top-0 flex h-8 w-10 items-center justify-center rounded-r-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5 stroke-white"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
      <div class="logs-wrapper">
        <div class="logs-item">
          <div class="logs-item__title dark:text-black-700">13 декабря</div>
          <div class="logs-card green">
            <div class="logs-card__top">
              <div class="logs-card__title">Приход №1</div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700">
              Продажа товара , клиенту “Дымок”
            </div>
            <div class="logs-card__link">Склад мой</div>
          </div>
        </div>
        <div class="logs-item">
          <div class="logs-item__title dark:text-black-700">13 декабря</div>
          <div class="logs-card red">
            <div class="logs-card__top">
              <div class="logs-card__title">Расход №2</div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700">
              Продажа товара , клиенту “Дымок”
            </div>
            <div class="logs-card__link">Склад мой</div>
          </div>
        </div>
        <div class="logs-item">
          <div class="logs-card green">
            <div class="logs-card__top">
              <div class="logs-card__title">Приход №1</div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700">
              Продажа товара , клиенту “Дымок”
            </div>
            <div class="logs-card__link">Склад мой</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

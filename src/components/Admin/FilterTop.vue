<template>
  <div
    class="logs-filter__top admin-catalog border-b mb-3 fixed bg-black-300 dark:bg-black-900"
  >
    <div class="subtext" @click="$router.go(-1)">
      <svg
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0.999999L1 6L5 11"
          stroke="#5181B8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Назад</p>
    </div>
    <div class="title"><slot /></div>
    <div class="subtext" v-if="ready">Готово</div>
    <div class="catalog-filter" v-if="filter">
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
      <div class="catalog-filter__btn bg-black-300 dark:bg-black-800">
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 0L8.39711 4.5H0.602886L4.5 0Z" fill="white"></path>
          <path
            d="M4.5 12L0.602886 7.5L8.39711 7.5L4.5 12Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ready", "filter"],
  emits: ["filterClicked"],
};
</script>

<style></style>

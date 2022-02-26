<template>
  <div class="overlay" v-if="showSort" @click="$emit('makeFalse')"></div>
  <div
    class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
    :class="{ 'sort-active': showSort }"
  >
    <div class="title dark:text-white">Сортировать</div>
    <div class="wrapper">
      <label
        class="form-control border-black-600 border-b dark:text-white"
        @click="handleCheck(1)"
      >
        Сначала рекомендуемое
        <input type="radio" name="sort" checked />
        <div class="checkmark"></div>
      </label>
      <label
        class="form-control border-black-600 border-b dark:text-white"
        @click="handleCheck(2)"
      >
        Сначала популярное
        <input type="radio" name="sort" />
        <div class="checkmark"></div>
      </label>
      <label
        class="form-control border-black-600 border-b dark:text-white"
        @click="handleCheck(3)"
      >
        Сначала дешевле
        <input type="radio" name="sort" />
        <div class="checkmark"></div>
      </label>
      <label
        class="form-control border-black-600 border-b dark:text-white"
        @click="handleCheck(4)"
      >
        <span>Сначала дороже</span>
        <input type="radio" name="sort" />
        <div class="checkmark"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showSort"],
  emits: ["makeFalse"],
  methods: {
    handleCheck(num) {
      console.log(num);
    },
  },
};
</script>

<style></style>

<template>
  <div
    class="filter bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-300"
  >
    <div class="filter-top border-black-600 border-b">
      <button class="filter-reset">Сброс</button>
      <div class="title">Фильтр</div>
      <button class="filter-close" @click="$emit('closeFilter')">
        <img
          src="@/assets/img/icons/close.svg"
          alt="close"
          v-if="isDarkTheme"
        />
        <img
          src="@/assets/img/icons/close-black.svg"
          alt="close-black"
          v-else
        />
      </button>
    </div>
    <div class="filter-body">
      <ul class="menu">
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow1 = !isShow1"
            :class="{ active: isShow1 }"
          >
            <span>Производитель</span>
            <img
              src="../assets/img/icons/arrow-top.svg"
              alt="arrow-top"
              v-if="isDarkTheme"
            />
            <img
              src="../assets/img/icons/arrow-top-black.svg"
              alt="arrow-top-black"
              v-else
            />
          </div>
          <div class="child" :class="{ active: isShow1 }">
            <div class="child-form registration">
              <div class="relative mb-2 flex h-8">
                <input
                  type="search"
                  placeholder="Поиск значений"
                  class="border-black-800 dark:bg-black-900 w-full rounded-lg"
                />
                <div
                  class="bg-black-800 absolute right-0 top-0 flex h-8 w-16 items-center justify-center rounded-r-lg"
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
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="child-checkbox form">
                <div class="checkbox" @click="checked1 = !checked1">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked1,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked1"
                    />
                  </div>
                  <div class="checkbox-content">Oden’s</div>
                </div>
                <div class="checkbox" @click="checked2 = !checked2">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked2,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked2"
                    />
                  </div>
                  <div class="checkbox-content">Oden’s</div>
                </div>
                <div class="checkbox" @click="checked3 = !checked3">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked3,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked3"
                    />
                  </div>
                  <div class="checkbox-content">Oden’s</div>
                </div>
                <div class="checkbox" @click="checked4 = !checked4">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked4,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked4"
                    />
                  </div>
                  <div class="checkbox-content">Oden’s</div>
                </div>
                <div class="checkbox" @click="checked5 = !checked5">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked5,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked5"
                    />
                  </div>
                  <div class="checkbox-content">Oden’s</div>
                </div>
              </div>
              <a href="#" class="child-more">Показать ещё</a>
            </div>
          </div>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow2 = !isShow2"
            :class="{ active: isShow2 }"
          >
            <span>Количество</span>
            <img
              src="../assets/img/icons/arrow-top.svg"
              alt="arrow-top"
              v-if="isDarkTheme"
            />
            <img
              src="../assets/img/icons/arrow-top-black.svg"
              alt="arrow-top-black"
              v-else
            />
          </div>
          <ul class="child price" :class="{ active: isShow2 }">
            <div class="price-top">
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMin1"
              />
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMax1"
              />
            </div>
            <div class="price-bottom">
              <input type="range" min="0" max="10" v-model="priceMin1" />
              <input type="range" min="0" max="30" v-model="priceMax1" />
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeFilter"],
  data() {
    return {
      isShow1: false,
      isShow2: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      priceMin1: 400,
      priceMax1: 800,
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

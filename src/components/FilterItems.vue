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
            <span>Цена</span>
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
              <input type="range" min="0" max="400" v-model="priceMin1" />
              <input type="range" min="0" max="800" v-model="priceMax1" />
            </div>
          </ul>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div class="menu-title" @click="isShow3 = !isShow3">
            <span>Только в наличии</span>
            <label class="create-tasks__container">
              <input type="checkbox" checked class="create-tasks__checkbox" />
              <span class="create-tasks__checkmark"></span
            ></label>
          </div>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div class="menu-title" @click="isShow3 = !isShow3">
            <span>Табачная</span>
            <label class="create-tasks__container">
              <input type="checkbox" checked class="create-tasks__checkbox" />
              <span class="create-tasks__checkmark"></span
            ></label>
          </div>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow4 = !isShow4"
            :class="{ active: isShow4 }"
          >
            <span>Крепкость</span>
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
          <div class="child strength" :class="{ active: isShow4 }">
            <div class="strength-top">
              <span
                class="dark:bg-black-900 bg-black-300"
                @click="spanClick(1)"
                :class="{ 'span-active': span1 }"
              ></span>
              <span
                class="dark:bg-black-900 bg-black-300"
                @click="spanClick(2)"
                :class="{ 'span-active': span2 }"
              ></span>
              <span
                class="dark:bg-black-900 bg-black-300"
                @click="spanClick(3)"
                :class="{ 'span-active': span3 }"
              ></span>
            </div>
            <div class="strength-bottom">
              <p>Легкая</p>
              <p>Средняя</p>
              <p>Сильная</p>
            </div>
          </div>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow5 = !isShow5"
            :class="{ active: isShow5 }"
          >
            <span>Порционность</span>
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
          <ul class="child price" :class="{ active: isShow5 }">
            <div class="price-top">
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMin2"
              />
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMax2"
              />
            </div>
            <div class="price-bottom">
              <input type="range" min="0" max="10" v-model="priceMin2" />
              <input type="range" min="0" max="30" v-model="priceMax2" />
            </div>
          </ul>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow6 = !isShow6"
            :class="{ active: isShow6 }"
          >
            <span>Количество в блоке</span>
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
          <ul class="child price" :class="{ active: isShow6 }">
            <div class="price-top">
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMin3"
              />
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMax3"
              />
            </div>
            <div class="price-bottom">
              <input type="range" min="0" max="10" v-model="priceMin3" />
              <input type="range" min="0" max="30" v-model="priceMax3" />
            </div>
          </ul>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow7 = !isShow7"
            :class="{ active: isShow7 }"
          >
            <span>Количество в коробке</span>
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
          <ul class="child price" :class="{ active: isShow7 }">
            <div class="price-top">
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMin4"
              />
              <input
                type="number"
                class="border-black-800 dark:bg-black-900 rounded-lg text-black-700"
                v-model="priceMax4"
              />
            </div>
            <div class="price-bottom">
              <input type="range" min="0" max="10" v-model="priceMin4" />
              <input type="range" min="0" max="30" v-model="priceMax4" />
            </div>
          </ul>
        </li>
        <li class="menu-list border-black-600 border-b">
          <div
            class="menu-title"
            @click="isShow8 = !isShow8"
            :class="{ active: isShow8 }"
          >
            <span>Вкус</span>
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
          <div class="child" :class="{ active: isShow8 }">
            <div class="child-form registration">
              <div class="child-checkbox form">
                <div class="checkbox" @click="checked11 = !checked11">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked11,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked11"
                    />
                  </div>
                  <div class="checkbox-content">Мята</div>
                </div>
                <div class="checkbox" @click="checked22 = !checked22">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked22,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked22"
                    />
                  </div>
                  <div class="checkbox-content">Виноград</div>
                </div>
                <div class="checkbox" @click="checked33 = !checked33">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked33,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked33"
                    />
                  </div>
                  <div class="checkbox-content">Лимон</div>
                </div>
                <div class="checkbox" @click="checked44 = !checked44">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked44,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked44"
                    />
                  </div>
                  <div class="checkbox-content">Клубника</div>
                </div>
                <div class="checkbox" @click="checked55 = !checked55">
                  <div
                    class="checkbox-container border-black-600 rounded border dark:text-white"
                    :class="{
                      'border-blueish bg-blueish border-blueish': checked55,
                    }"
                  >
                    <img
                      src="@/assets/img/icons/check.svg"
                      alt="check"
                      v-if="checked55"
                    />
                  </div>
                  <div class="checkbox-content">Черника</div>
                </div>
              </div>
              <a href="#" class="child-more">Показать ещё</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button
      class="filter-btn dark:bg-blueish text-black-900 mb-10 border-black-900 rounded border dark:text-white"
    >
      Показать 1234 товара
    </button>
  </div>
</template>

<script>
export default {
  emits: ["closeFilter"],
  data() {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      isShow6: false,
      isShow7: false,
      isShow8: false,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked11: false,
      checked22: false,
      checked33: false,
      checked44: false,
      checked55: false,
      priceMin1: 400,
      priceMax1: 800,
      priceMin2: 10,
      priceMax2: 30,
      priceMin3: 10,
      priceMax3: 30,
      priceMin4: 10,
      priceMax4: 30,
      span1: true,
      span2: false,
      span3: false,
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
  methods: {
    spanClick(num) {
      if (num === 1) {
        this.span1 = true;
        this.span2 = false;
        this.span3 = false;
      } else if (num === 2) {
        this.span1 = false;
        this.span2 = true;
        this.span3 = false;
      } else {
        this.span1 = false;
        this.span2 = false;
        this.span3 = true;
      }
    },
  },
};
</script>

<style></style>

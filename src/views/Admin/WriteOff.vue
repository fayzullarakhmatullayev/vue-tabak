<template>
  <div class="invent">
    <filter-top :ready="true">Списание</filter-top>
    <div class="sales-content border-b dark:border-black-700 pt-20">
      <div class="sales-content__document">
        <p>Документ проведен</p>
        <label class="create-tasks__container"
          ><input type="checkbox" class="create-tasks__checkbox" /><span
            class="create-tasks__checkmark"
          ></span
        ></label>
      </div>
      <div class="sales-content__search">
        <div class="relative flex h-8">
          <input
            type="search"
            placeholder="Номер документа"
            class="border-black-800 dark:bg-black-900 w-full rounded-lg"
          />
          <div
            class="absolute right-2 top-0 flex h-8 items-center justify-center rounded-r-lg"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.58163 0.0275013C7.4125 0.0645131 7.23763 0.144664 7.08374 0.255699C7.01343 0.306445 5.65437 1.64985 4.06361 3.24107L1.17134 6.13418L0.585617 7.90794C0.263493 8.88352 -4.17101e-05 9.70878 4.95164e-09 9.74185C0.000146008 9.86316 0.139996 10 0.263785 10C0.284997 10 1.10497 9.73269 2.08592 9.40598L3.86951 8.81195L6.81286 5.86839C10.0196 2.66147 9.8433 2.85076 9.95192 2.4976C9.98972 2.37471 10 2.29231 10 2.11206C10 1.93182 9.98972 1.84942 9.95192 1.72652C9.85694 1.41772 9.80133 1.34453 9.22158 0.765195C8.70758 0.251594 8.68018 0.227774 8.50712 0.144643C8.40813 0.0971069 8.26265 0.0445484 8.18383 0.0278764C8.00896 -0.00915623 7.74985 -0.0093021 7.58163 0.0275013ZM8.18135 0.601039C8.34427 0.661933 8.43356 0.737832 8.90796 1.21863C9.35327 1.66994 9.41424 1.75741 9.4439 1.98759C9.48451 2.30258 9.39607 2.52117 9.11543 2.79953L8.92659 2.98682L7.96624 2.02845L7.00588 1.07006L7.19399 0.889006C7.29745 0.789411 7.42253 0.684253 7.47194 0.655327C7.68066 0.5331 7.94545 0.512844 8.18135 0.601039ZM7.57648 2.42994L8.53061 3.38343L6.13203 5.7799L3.73346 8.17638L2.77397 7.21786L1.81448 6.25935L4.20786 3.8679C5.52422 2.5526 6.606 1.47644 6.6118 1.47644C6.61762 1.47644 7.0517 1.90552 7.57648 2.42994ZM2.38577 7.62191L3.21753 8.45317L1.98737 8.86189C1.31077 9.08669 0.747117 9.2706 0.734811 9.2706C0.722484 9.2706 0.894663 8.72434 1.11738 8.05667C1.5571 6.73862 1.53939 6.79064 1.54803 6.79064C1.55132 6.79064 1.9283 7.16472 2.38577 7.62191Z"
                fill="#8D8E90"
                fill-opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
      <ul class="logs-filter__ul mb-3 pb-3 border-b dark:border-black-700">
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700 rounded-lg"
        >
          <div class="logs-filter__content">
            <p>Дата</p>
            13 декабря 2021
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </li>
        <li class="sales-content__search">
          <div class="relative flex h-8">
            <input
              type="search"
              placeholder="Причина"
              class="border-black-800 dark:bg-black-900 w-full rounded-lg"
            />
            <div
              class="absolute right-2 top-0 flex h-8 items-center justify-center rounded-r-lg"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.58163 0.0275013C7.4125 0.0645131 7.23763 0.144664 7.08374 0.255699C7.01343 0.306445 5.65437 1.64985 4.06361 3.24107L1.17134 6.13418L0.585617 7.90794C0.263493 8.88352 -4.17101e-05 9.70878 4.95164e-09 9.74185C0.000146008 9.86316 0.139996 10 0.263785 10C0.284997 10 1.10497 9.73269 2.08592 9.40598L3.86951 8.81195L6.81286 5.86839C10.0196 2.66147 9.8433 2.85076 9.95192 2.4976C9.98972 2.37471 10 2.29231 10 2.11206C10 1.93182 9.98972 1.84942 9.95192 1.72652C9.85694 1.41772 9.80133 1.34453 9.22158 0.765195C8.70758 0.251594 8.68018 0.227774 8.50712 0.144643C8.40813 0.0971069 8.26265 0.0445484 8.18383 0.0278764C8.00896 -0.00915623 7.74985 -0.0093021 7.58163 0.0275013ZM8.18135 0.601039C8.34427 0.661933 8.43356 0.737832 8.90796 1.21863C9.35327 1.66994 9.41424 1.75741 9.4439 1.98759C9.48451 2.30258 9.39607 2.52117 9.11543 2.79953L8.92659 2.98682L7.96624 2.02845L7.00588 1.07006L7.19399 0.889006C7.29745 0.789411 7.42253 0.684253 7.47194 0.655327C7.68066 0.5331 7.94545 0.512844 8.18135 0.601039ZM7.57648 2.42994L8.53061 3.38343L6.13203 5.7799L3.73346 8.17638L2.77397 7.21786L1.81448 6.25935L4.20786 3.8679C5.52422 2.5526 6.606 1.47644 6.6118 1.47644C6.61762 1.47644 7.0517 1.90552 7.57648 2.42994ZM2.38577 7.62191L3.21753 8.45317L1.98737 8.86189C1.31077 9.08669 0.747117 9.2706 0.734811 9.2706C0.722484 9.2706 0.894663 8.72434 1.11738 8.05667C1.5571 6.73862 1.53939 6.79064 1.54803 6.79064C1.55132 6.79064 1.9283 7.16472 2.38577 7.62191Z"
                  fill="#8D8E90"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
      <h2 class="mb-2">Контрагенты</h2>
      <div class="sales-content__wrapper mb-4">
        <div
          class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg w-full"
        >
          <div class="sales-content__inner">
            <h3>Склад</h3>
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
            />
          </svg>
        </div>
      </div>
      <div class="sales-content__btns">
        <button
          class="sales-content__btn bg-blueish text-white rounded-lg mb-4"
        >
          Добавить товары
        </button>
      </div>
    </div>
    <ul class="sales-list admin-catalog">
      <li class="sales-list__items border-b dark:border-black-700">
        <div class="sales-list__title">
          Жевательный табак Oden’s Cloud Dry 16g
        </div>
        <div class="sales-list__bottom">
          <div class="sales-list__price">1 шт * 1228 руб</div>
          <div class="sales-list__price">
            Остаток
            <span style="color: #5181b8">258 шт</span>
          </div>
          <div class="sales-list__price">550.00 руб</div>
        </div>
        <div class="card-burger" @click="isModalOpen = true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
      <li class="sales-list__items border-b dark:border-black-700">
        <div class="sales-list__title">
          Жевательный табак Oden’s Cloud Dry 16g
        </div>
        <div class="sales-list__bottom">
          <div class="sales-list__price">1 шт * 1228 руб</div>
          <div class="sales-list__price">
            Остаток
            <span style="color: #5181b8">258 шт</span>
          </div>
          <div class="sales-list__price">550.00 руб</div>
        </div>
        <div class="card-burger" @click="isModalOpen = true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </li>
    </ul>
  </div>
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
    <div class="logs-modal">
      <div
        class="overlay"
        v-if="isCreateDocOpen"
        @click="isCreateDocOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-200"
        :class="{ 'sort-active': isCreateDocOpen }"
      >
        <div class="logs-menu">
          <a href="#" class="logs-menu__link">Оприходование</a
          ><a href="#" class="logs-menu__link">Списание</a
          ><a
            href="#"
            class="logs-menu__link"
            @click.prevent="isCreateDocOpen = false"
            >Отменить</a
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
export default {
  components: { FilterTop },
  data() {
    return {
      isModalOpen: false,
      isCreateDocOpen: false,
    };
  },
};
</script>

<style scoped>
.sales-content__btn {
  width: 100%;
}
</style>

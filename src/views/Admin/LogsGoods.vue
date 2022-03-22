<template>
  <div class="logs admin-catalog">
    <div class="catalog-top fixed dark:bg-black-900 bg-white">
      <div
        class="catalog-top__title logs-title"
        @click="isTopMenuOpen = !isTopMenuOpen"
      >
        Движение товара
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-stroke"
        >
          <path
            d="M11 5L6 1L1 5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="catalog-filter" @click="$router.push('/logs-filter')">
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
          <div class="logs-card red">
            <div class="logs-card__top top">
              <div class="logs-card__title">
                Возврат продажи №1 <span class="orange">Оформлен</span>
              </div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text logs-card__footer dark:text-black-700">
              “Дымок” > Склад мой
            </div>
            <div class="logs-burger" @click="isLogsMenuOpen = true">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <div class="logs-item">
          <div class="logs-item__title dark:text-black-700">13 декабря</div>
          <div class="logs-card green">
            <div class="logs-card__top top">
              <div class="logs-card__title">
                Продажа №1 <span class="blue">Подтвержден</span>
              </div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700 logs-card__footer">
              Склад мой > “Дымок”
              <p>Долг 400₽</p>
            </div>
            <div class="logs-burger" @click="isLogsMenuOpen = true">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <div class="logs-item">
          <div class="logs-item__title dark:text-black-700">13 декабря</div>
          <div class="logs-card green">
            <div class="logs-card__top top">
              <div class="logs-card__title">
                Продажа №1 <span class="log-green">Отгружен</span>
              </div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700 logs-card__footer">
              Склад мой > “Дымок”
              <p>Долг 400₽</p>
            </div>
            <div class="logs-burger" @click="isLogsMenuOpen = true">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <div class="logs-item">
          <div class="logs-item__title dark:text-black-700">13 декабря</div>
          <div class="logs-card green">
            <div class="logs-card__top top">
              <div class="logs-card__title">
                Продажа №1 <span class="log-red">Отменен</span>
              </div>
              <div class="logs-card__price">800₽</div>
            </div>
            <div class="logs-card__text dark:text-black-700 logs-card__footer">
              Склад мой > “Дымок”
              <p>Долг 400₽</p>
            </div>
            <div class="logs-burger" @click="isLogsMenuOpen = true">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <div class="logs-top">
      <div
        class="overlay"
        v-if="isTopMenuOpen"
        @click="isTopMenuOpen = false"
      ></div>
      <div
        class="logs-top__wrapper bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-200"
        :class="{ 'menu-active': isTopMenuOpen }"
      >
        <router-link to="/logs-goods" class="logs-top__link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-stroke"
          >
            <path
              d="M18.3333 12.5C18.3333 15.725 15.725 18.3333 12.5 18.3333L13.375 16.875"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.66663 7.50008C1.66663 4.27508 4.27496 1.66675 7.49996 1.66675L6.62496 3.12508"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4166 3.7085L14.7333 5.62515L18.0166 3.71684"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.7333 9.01671V5.6167"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.95 1.84175L11.95 2.95004C11.5 3.20004 11.125 3.83337 11.125 4.35004V6.46674C11.125 6.9834 11.4917 7.61673 11.95 7.86673L13.95 8.97508C14.375 9.21675 15.075 9.21675 15.5083 8.97508L17.5083 7.86673C17.9583 7.61673 18.3333 6.9834 18.3333 6.46674V4.35004C18.3333 3.83337 17.9667 3.20004 17.5083 2.95004L15.5083 1.84175C15.0833 1.60841 14.3833 1.60841 13.95 1.84175Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.95825 12.875L5.26659 14.7917L8.55825 12.8833"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.2666 18.1832V14.7832"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.49163 11.0083L2.49163 12.1165C2.04163 12.3665 1.66663 12.9999 1.66663 13.5165V15.6332C1.66663 16.1499 2.0333 16.7832 2.49163 17.0332L4.49163 18.1416C4.91663 18.3832 5.61662 18.3832 6.04995 18.1416L8.04996 17.0332C8.49996 16.7832 8.87495 16.1499 8.87495 15.6332V13.5165C8.87495 12.9999 8.5083 12.3665 8.04996 12.1165L6.04995 11.0083C5.61662 10.7749 4.91663 10.7749 4.49163 11.0083Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Движение товара</p>
        </router-link>
        <router-link to="/logs" class="logs-top__link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-stroke"
          >
            <path
              d="M2.08337 11.0332V9.59159C2.08337 7.86659 3.4917 6.45825 5.2167 6.45825H14.7834C16.5084 6.45825 17.9167 7.86659 17.9167 9.59159V10.7916H16.2334C15.7667 10.7916 15.3417 10.9749 15.0334 11.2916C14.6834 11.6332 14.4834 12.1249 14.5334 12.6499C14.6084 13.5499 15.4334 14.2082 16.3334 14.2082H17.9167V15.1999C17.9167 16.9249 16.5084 18.3333 14.7834 18.3333H10.2167"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.08337 10.3416V6.5333C2.08337 5.54163 2.6917 4.65826 3.6167 4.30826L10.2334 1.80826C11.2667 1.41659 12.375 2.18329 12.375 3.29162V6.45828"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.799 11.6417V13.3584C18.799 13.8168 18.4324 14.1917 17.9657 14.2084H16.3324C15.4324 14.2084 14.6074 13.5501 14.5324 12.6501C14.4824 12.1251 14.6824 11.6334 15.0324 11.2917C15.3407 10.9751 15.7657 10.7917 16.2324 10.7917H17.9657C18.4324 10.8084 18.799 11.1834 18.799 11.6417Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.83337 10H11.6667"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 13.75H6.95C7.48333 13.75 7.91667 14.1833 7.91667 14.7166V15.7833"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.51667 12.7334L2.5 13.75L3.51667 14.7667"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.91667 18.15H3.46667C2.93334 18.15 2.5 17.7167 2.5 17.1833V16.1167"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.901 19.1669L7.91767 18.1502L6.901 17.1335"
              stroke="white"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Движение денег</p>
        </router-link>
      </div>
    </div>
    <div class="logs-modal">
      <div
        class="overlay"
        v-if="isLogsMenuOpen"
        @click="isLogsMenuOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-200"
        :class="{ 'sort-active': isLogsMenuOpen }"
      >
        <div class="logs-menu">
          <a href="#" class="logs-menu__link">Редактировать</a>
          <a href="#" class="logs-menu__link">Привязать платёж</a>
          <a href="#" class="logs-menu__link">Отложить</a>
          <a href="#" class="logs-menu__link red">Удалить</a>
          <a
            href="#"
            class="logs-menu__link"
            @click.prevent="isLogsMenuOpen = false"
            >Отменить</a
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isLogsMenuOpen: false,
      isTopMenuOpen: false,
    };
  },
};
</script>

<style></style>

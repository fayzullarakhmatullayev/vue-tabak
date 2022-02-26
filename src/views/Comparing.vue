<template>
  <div class="relative flex flex-col comparing">
    <div class="mt-16">
      <div class="mb-2">
        <span class="text-lg font-medium bought"
          >Сравнение <span>{{ products.length }} товара</span></span
        >
      </div>
      <div class="card-slider">
        <div class="card" v-for="product in products" :key="product.id">
          <div
            class="card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
          >
            <img :src="product.image" :alt="product.name" />
            <img
              src="../assets/img/icons/close.svg"
              alt="close"
              v-if="isDarkTheme"
              class="card-delete"
            />
            <img
              src="../assets/img/icons/close-black.svg"
              alt="close-black"
              class="card-delete"
              v-else
            />
          </div>
          <div class="card-content">
            <div class="card-price">{{ product.price }}₽</div>
            <div class="card-name">{{ product.name }}</div>
          </div>
          <div class="btn-wrapper">
            <div class="flex flex-col justify-between">
              <button
                class="dark:bg-blueish text-black-900 border-black-900 mb-3 rounded border dark:text-white btn"
              >
                Блок
              </button>
            </div>
            <div class="flex flex-col justify-between text-white">
              <button
                class="bg-black-300 dark:bg-black-900 dark:border-black-700 dark:text-black-700 mb-3 rounded border border-white btn"
              >
                Коробка
              </button>
              <div class="flex justify-between">
                <button
                  class="bg-black-30 dark:bg-blueish bg-black-900 rounded px-3 btn-sm"
                  @click="product.boxes--"
                >
                  -
                </button>
                <span class="text-black-900 dark:text-white">{{
                  product.boxes
                }}</span>
                <button
                  class="bg-black-30 dark:bg-blueish bg-black-900 rounded px-3 btn-sm"
                  @click="product.boxes++"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content mb-20">
        <div class="content-title">Характеристики</div>
        <div class="content-info">
          <span>Крепкость</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen1 = !isInfoOpen1"
            />
            <div class="info" v-if="isInfoOpen1">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen1 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">Сильная</div>
          <div class="content-compare_info">Сильная</div>
          <div class="content-compare_info">Сильная</div>
        </div>
        <div class="content-info">
          <span>Производитель</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen2 = !isInfoOpen2"
            />
            <div class="info" v-if="isInfoOpen2">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen2 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">Oden’s</div>
          <div class="content-compare_info">Oden’s</div>
          <div class="content-compare_info">Oden’s</div>
        </div>
        <div class="content-info">
          <span>Никотин</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen3 = !isInfoOpen3"
            />
            <div class="info" v-if="isInfoOpen3">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen3 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">22 м/г</div>
          <div class="content-compare_info">22 м/г</div>
          <div class="content-compare_info">22 м/г</div>
        </div>
        <div class="content-info">
          <span>Порционность</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen4 = !isInfoOpen4"
            />
            <div class="info" v-if="isInfoOpen4">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen4 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info blue">13-15 шт</div>
          <div class="content-compare_info">10-13 шт</div>
          <div class="content-compare_info blue">13-15 шт</div>
        </div>
        <div class="content-info">
          <span>Кол-во в блоке</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen5 = !isInfoOpen5"
            />
            <div class="info" v-if="isInfoOpen5">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen5 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">13-15 шт</div>
          <div class="content-compare_info">13-15 шт</div>
          <div class="content-compare_info">13-15 шт</div>
        </div>
        <div class="content-info">
          <span>Кол-во в коробке</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen6 = !isInfoOpen6"
            />
            <div class="info" v-if="isInfoOpen6">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen6 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">13-15 шт</div>
          <div class="content-compare_info">13-15 шт</div>
          <div class="content-compare_info">13-15 шт</div>
        </div>
        <div class="content-info">
          <span>Вид</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen7 = !isInfoOpen7"
            />
            <div class="info" v-if="isInfoOpen7">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen7 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">Табачный</div>
          <div class="content-compare_info">Табачный</div>
          <div class="content-compare_info">Табачный</div>
        </div>
        <div class="content-info">
          <span>Вкус</span>
          <div class="info-wrapper">
            <img
              src="@/assets/img/icons/info-circle.svg"
              alt="info-circle"
              @click="isInfoOpen8 = !isInfoOpen8"
            />
            <div class="info" v-if="isInfoOpen8">
              <img
                src="../assets/img/icons/close.svg"
                alt="close"
                @click="isInfoOpen8 = false"
              />
              Какая-то надпись об описании Lorem ipsum dolor sit, amet
            </div>
          </div>
        </div>
        <div
          class="content-compare bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        >
          <div class="content-compare_info">Мята</div>
          <div class="content-compare_info">Мята</div>
          <div class="content-compare_info">Мята</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comparing",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 0,
        },
        {
          id: 2,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 0,
        },
        {
          id: 3,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 0,
        },
        {
          id: 4,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 0,
        },
      ],
      isInfoOpen1: false,
      isInfoOpen2: false,
      isInfoOpen3: false,
      isInfoOpen4: false,
      isInfoOpen5: false,
      isInfoOpen6: false,
      isInfoOpen7: false,
      isInfoOpen8: false,
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

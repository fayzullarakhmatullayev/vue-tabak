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
          <div class="card-img">
            <img :src="product.image" :alt="product.name" />
            <svg
              class="card-delete"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.70511 4.00109L7.84755 0.85856C7.89524 0.812495 7.93328 0.757392 7.95946 0.696467C7.98563 0.635542 7.9994 0.570015 7.99998 0.503709C8.00056 0.437403 7.98792 0.371646 7.96281 0.310275C7.9377 0.248905 7.90062 0.193149 7.85374 0.146262C7.80685 0.0993747 7.75109 0.0622949 7.68972 0.0371862C7.62835 0.0120775 7.56259 -0.000557326 7.49629 1.88547e-05C7.42998 0.000595035 7.36445 0.0143708 7.30353 0.0405422C7.2426 0.0667137 7.1875 0.104757 7.14143 0.152452L3.99888 3.29486L0.856444 0.152452C0.762451 0.0605241 0.635998 0.00937173 0.504526 0.0100958C0.373054 0.0108198 0.247171 0.0633617 0.154197 0.156319C0.0612223 0.249276 0.00865793 0.375148 0.00791065 0.506619C0.00716337 0.63809 0.0582936 0.764552 0.150205 0.85856L3.29276 4.00109L0.150205 7.14362C0.102986 7.18981 0.0653973 7.2449 0.0396156 7.30571C0.0138339 7.36651 0.000371311 7.43183 7.57321e-06 7.49788C-0.000356165 7.56393 0.0123862 7.62939 0.0374966 7.69048C0.062607 7.75157 0.0995864 7.80707 0.146294 7.85377C0.193002 7.90047 0.24851 7.93744 0.309604 7.96254C0.370698 7.98764 0.436164 8.00037 0.502212 7.99999C0.56826 7.99962 0.633577 7.98614 0.694381 7.96035C0.755186 7.93456 0.81027 7.89696 0.856444 7.84973L3.99888 4.70733L7.14143 7.84973C7.23893 7.94723 7.36678 7.99605 7.49449 7.99605C7.6222 7.99605 7.75017 7.94723 7.84755 7.84973C7.94116 7.75609 7.99376 7.62909 7.99376 7.49668C7.99376 7.36426 7.94116 7.23727 7.84755 7.14362L4.70511 4.00109Z"
                fill="white"
              />
            </svg>
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
                  class="bg-black-300 dark:bg-black-700 rounded px-3 btn-sm"
                  @click="product.boxes--"
                >
                  -
                </button>
                <span class="text-black-300">{{ product.boxes }}</span>
                <button
                  class="bg-black-300 dark:bg-black-700 rounded px-3 btn-sm"
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
        <div class="content-compare">
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
  mounted() {
    this.$store.state.isBackOpen = true;
  },
};
</script>

<style></style>

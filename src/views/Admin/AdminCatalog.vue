<template>
  <div class="admin-catalog">
    <div class="catalog-top fixed dark:bg-black-900 bg-white">
      <div class="catalog-top__title">Товар и услуги</div>
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
    <div class="card py-16">
      <div class="card-item" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" class="card-item__img" />
        <div class="card-item__content">
          <div class="card-item__title">
            {{ product.name }}
          </div>
          <div class="card-item__article dark:text-black-700">
            Артикул: {{ product.article }}
          </div>
          <div class="card-item__article dark:text-black-700">
            Артикул: {{ product.code }}
          </div>
          <div class="card-item__footer">
            <div class="card-item__price">{{ product.price }} ₽</div>
            <div
              class="card-item__left"
              :style="
                product.left > 100
                  ? 'color: #21B140'
                  : product.left > 50
                  ? 'color: #FF7A00'
                  : 'color: #EF2525'
              "
            >
              Остаток: {{ product.left }}
            </div>
          </div>
        </div>
        <div class="card-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 460,
        },
        {
          id: 2,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 640,
        },
        {
          id: 3,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 55,
        },
        {
          id: 4,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 2,
        },
        {
          id: 5,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 50,
        },
        {
          id: 6,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 51,
        },
        {
          id: 7,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 460,
        },
        {
          id: 8,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 640,
        },
        {
          id: 9,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 55,
        },
        {
          id: 10,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 2,
        },
        {
          id: 11,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 50,
        },
        {
          id: 12,
          name: "Жевательный табак Oden’s 10г",
          article: 12345,
          code: 7568511231235,
          image: require("@/assets/img/products/1.png"),
          price: 400,
          left: 51,
        },
      ],
    };
  },
};
</script>

<style></style>

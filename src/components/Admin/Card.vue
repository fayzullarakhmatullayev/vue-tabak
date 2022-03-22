<template>
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
      <div class="card-burger" @click="isMenuOpen = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <button class="sales-payment__btn rounded-lg my-16">Добавить оплату</button>
  </div>
  <teleport to="body">
    <div class="logs-modal">
      <div class="overlay" v-if="isMenuOpen" @click="isMenuOpen = false"></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-200"
        :class="{ 'sort-active': isMenuOpen }"
      >
        <div class="logs-menu">
          <a href="#" @click.prevent="editHandler" class="logs-menu__link"
            >Редактировать</a
          ><a href="#" class="logs-menu__link">Создать входящий платеж</a>
          <a href="#" class="logs-menu__link">Создать отгрузк</a>
          <a href="#" class="logs-menu__link">Сделать возврат</a>
          <a href="#" class="logs-menu__link">Отложить</a>
          <a href="#" class="logs-menu__link red">Удалить</a
          ><a href="#" class="logs-menu__link">Отменить</a>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ["makeEditTrue"],
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
      isMenuOpen: false,
    };
  },
  methods: {
    editHandler() {
      this.isMenuOpen = false;
      this.$emit("makeEditTrue");
    },
  },
};
</script>

<style></style>

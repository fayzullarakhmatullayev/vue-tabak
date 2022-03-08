<template>
  <div class="report pt-16 pb-16">
    <div
      class="dark:bg-black-900 sticky top-14 flex w-full flex-col bg-white py-2"
    >
      <h1 class="report-title">Отчет</h1>
      <div class="grid grid-cols-2 gap-2">
        <button
          class="bg-black-800 flex items-center justify-center rounded-lg py-1"
          @click="isFilterOpen = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 15"
            fill="white"
            class="mr-2 h-5 w-5"
          >
            <path
              d="M18.3335 0.333374L17.0835 1.58337L16.6668 2.00004L11.6668 7.00004V14.5L7.50017 13.25L7.50016 7.00004L2.91683 2.41671L2.50017 2.00004L0.833496 0.333374H18.3335Z"
            ></path></svg
          ><span class="text-white">Фильтр</span>
        </button>
        <input
          type="date"
          class="border-black-800 dark:bg-black-900 w-full rounded-lg report-input text-black-700 text-center"
        />
      </div>
    </div>
    <div class="report-wrapper">
      <div
        class="report-card border-b"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.image" alt="products" class="report-img" />
        <div class="report-content">
          <div class="report-name">{{ product.name }}</div>
          <div class="report-blog">
            <div class="report-blog__name" v-if="product.boxes > 0">
              Каробки
            </div>
            <div class="report-blog__name" v-else-if="product.blocks > 0">
              Блок
            </div>
            <div
              class="report-blog__count text-black-700"
              v-if="product.boxes > 0"
            >
              ({{ product.boxes }} штук)
            </div>
            <div
              class="report-blog__count text-black-700"
              v-else-if="product.blocks > 0"
            >
              ({{ product.blocks }} штук)
            </div>
          </div>
          <div class="report-price">{{ product.price }}₽</div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <report-filter v-if="isFilterOpen" @closeFilter="isFilterOpen = false" />
  </teleport>
</template>

<script>
import ReportFilter from "@/components/Client/ReportFilter.vue";
export default {
  components: { ReportFilter },
  data() {
    return {
      isFilterOpen: false,
      products: [
        {
          id: 1,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 6,
          boxes: 0,
        },
        {
          id: 2,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 4,
        },
        {
          id: 3,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 5,
        },
        {
          id: 4,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 5,
          boxes: 0,
        },
        {
          id: 5,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 4,
          boxes: 0,
        },
        {
          id: 6,
          name: "Жевательный табак Oden’s 10г",
          status: "Доступно",
          image: require("../../assets/img/products/1.png"),
          price: 400,
          blocks: 0,
          boxes: 6,
        },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div class="sales">
    <filter-top :ready="true">Продажа</filter-top>
    <div class="sales-tab">
      <button
        class="dark:bg-black-800 text-black-900 border-black-900 rounded border dark:text-white"
        v-for="btn in tabBtns"
        :key="btn.id"
        :class="{ 'sales-tab__active': btn.isActive }"
        @click="switchTab(btn.id)"
      >
        {{ btn.title }}
      </button>
    </div>
    <sales-order v-if="tabBtns[0].isActive" />
    <sales-payment v-else-if="tabBtns[1].isActive" />
    <sales-load v-else-if="tabBtns[2].isActive" />
  </div>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
import SalesOrder from "@/components/Admin/SalesOrder.vue";
import SalesPayment from "@/components/Admin/SalesPayment.vue";
import SalesLoad from "@/components/Admin/SalesLoad.vue";
export default {
  components: { FilterTop, SalesOrder, SalesPayment, SalesLoad },
  data() {
    return {
      tabBtns: [
        {
          id: 0,
          title: "Заказ",
          isActive: true,
        },
        {
          id: 1,
          title: "Оплата",
          isActive: false,
        },
        {
          id: 2,
          title: "Отгрузка",
          isActive: false,
        },
      ],
      isFilterOpen: false,
    };
  },
  methods: {
    switchTab(id) {
      this.tabBtns.forEach((btn) => (btn.isActive = false));
      this.tabBtns[id].isActive = true;
    },
  },
};
</script>

<style></style>

<template>
  <div class="sales">
    <filter-top :ready="true">Закупка</filter-top>
    <div class="sales-tab pt-20">
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
    <purchase-order v-if="tabBtns[0].isActive" />
    <purchase-payment v-else-if="tabBtns[1].isActive" />
    <purchase-load v-else-if="tabBtns[2].isActive" />
  </div>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
import PurchaseOrder from "@/components/Admin/PurchaseOrder.vue";
import PurchasePayment from "@/components/Admin/PurchasePayment.vue";
import PurchaseLoad from "@/components/Admin/PurchaseLoad.vue";
export default {
  components: { FilterTop, PurchaseOrder, PurchasePayment, PurchaseLoad },
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
          title: "Приёмка",
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

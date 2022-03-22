<template>
  <div class="sales">
    <filter-top :ready="true">Возврат закупки</filter-top>
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
    <div class="pt-2 border-t dark:border-black-700">
      <returns-sales-doc v-if="tabBtns[0].isActive" />
      <returns-sales-payment v-else-if="tabBtns[1].isActive" />
    </div>
  </div>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
import ReturnsSalesDoc from "@/components/Admin/ReturnsSalesDoc.vue";
import ReturnsSalesPayment from "@/components/Admin/ReturnsSalesPayment.vue";
export default {
  components: { FilterTop, ReturnsSalesDoc, ReturnsSalesPayment },
  data() {
    return {
      tabBtns: [
        {
          id: 0,
          title: "Документ",
          isActive: true,
        },
        {
          id: 1,
          title: "Оплата",
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

<style scoped>
.sales-tab button {
  width: 49%;
}
</style>

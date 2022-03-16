<template>
  <div class="tech-card">
    <filter-top :ready="true">Техническая карта</filter-top>
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
    <tech-product v-if="tabBtns[0].isActive" />
    <tech-material v-else-if="tabBtns[1].isActive" />
    <tech-payment v-else-if="tabBtns[2].isActive" />
  </div>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
import TechProduct from "@/components/Admin/TechProduct.vue";
import TechMaterial from "@/components/Admin/TechMaterial.vue";
import TechPayment from "@/components/Admin/TechPayment.vue";
export default {
  components: { FilterTop, TechProduct, TechMaterial, TechPayment },
  data() {
    return {
      tabBtns: [
        {
          id: 0,
          title: "Продукция",
          isActive: true,
        },
        {
          id: 1,
          title: "Материалы",
          isActive: false,
        },
        {
          id: 2,
          title: "Деньги",
          isActive: false,
        },
      ],
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

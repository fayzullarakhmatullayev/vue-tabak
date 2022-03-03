<template>
  <div class="graph report py-16">
    <h2 class="title">Отчет</h2>
    <div class="graph-filter">
      <input
        type="date"
        class="border-black-800 dark:bg-black-900 rounded-lg report-input text-center mr-2"
      />
      <input
        type="date"
        class="border-black-800 dark:bg-black-900 rounded-lg report-input text-center mr-2"
      />
      <button
        class="graph-btn dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white"
      >
        Применить
      </button>
    </div>
    <canvas class="border-b pb-6 border-black-600 mb-5" ref="canvas"></canvas>
    <div class="graph-info">
      <div
        class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
      >
        <div class="graph-card__title">01.12-13.12.2021</div>
        <div class="graph-card__text">Дата заказа</div>
      </div>
      <div
        class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
      >
        <div class="graph-card__title">120</div>
        <div class="graph-card__text">Количество заказов</div>
      </div>
      <div
        class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
      >
        <div class="graph-card__title">15 000</div>
        <div class="graph-card__text">Сумма заказа</div>
      </div>
      <div
        class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
      >
        <div class="graph-card__link graph-card__title">Подробнее</div>
        <div class="graph-card__text">Заказы по наименованиям</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
    };
  },
  methods: {},
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(81, 129, 184, 0.6)");
    this.gradient.addColorStop(0.5, "rgba(81, 129, 184, 0.3)");
    this.gradient.addColorStop(1, "rgba(81, 129, 184, 0)");

    this.renderChart(
      {
        labels: [
          "1 декабря",
          "7 декабря ",
          "10 декабря ",
          "12 декабря ",
          "17 декабря ",
          "27 декабря ",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: this.gradient,
            data: [40, 20, 30, 50, 80, 60],
            borderWidth: 1,
            borderColor: "#5181b8",
            pointBorderColor: "#5181b8",
            pointBackgroundColor: "#5181b8",
            lineTension: 0,
          },
        ],
      },
      {
        responsive: true,
      }
    );
  },
};
</script>

<style></style>

<template>
  <div class="admin-report report">
    <div class="report-top fixed dark:bg-black-900 bg-white">
      <div class="report-top__profile">
        <div class="report-top__img bg-black-300 dark:bg-black-800">ИИ</div>
        <div class="report-top__content">
          <div class="report-top__name">Иван Иванович</div>
          <div class="report-top__pos dark:text-black-700">Владелец</div>
        </div>
      </div>
      <div class="relative mr-3">
        <span
          class="absolute -top-2 -right-1.5 rounded-full bg-red-500 px-1.5 text-xs font-semibold leading-5 text-white"
        >
          2
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 22"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-black-900 h-6 w-6 dark:stroke-white"
        >
          <path
            d="M9.02009 1.91C5.71009 1.91 3.02009 4.6 3.02009 7.91V10.8C3.02009 11.41 2.76009 12.34 2.45009 12.86L1.30009 14.77C0.590088 15.95 1.08009 17.26 2.38009 17.7C6.69009 19.14 11.3401 19.14 15.6501 17.7C16.8601 17.3 17.3901 15.87 16.7301 14.77L15.5801 12.86C15.2801 12.34 15.0201 11.41 15.0201 10.8V7.91C15.0201 4.61 12.3201 1.91 9.02009 1.91Z"
          />
          <path
            d="M10.8699 2.2C10.5599 2.11 10.2399 2.04 9.90992 2C8.94992 1.88 8.02992 1.95 7.16992 2.2C7.45992 1.46 8.17992 0.940002 9.01992 0.940002C9.85992 0.940002 10.5799 1.46 10.8699 2.2Z"
          />
          <path
            d="M12.02 18.06C12.02 19.71 10.67 21.06 9.02002 21.06C8.20002 21.06 7.44002 20.72 6.90002 20.18C6.36002 19.64 6.02002 18.88 6.02002 18.06"
          />
        </svg>
      </div>
    </div>
    <div class="py-16">
      <h2 class="title">Показатели</h2>
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
      <div class="graph-report">
        <div
          @click="isTodayModalOpen = true"
          class="graph-report__link bg-black-300 dark:bg-black-800"
        >
          <div class="graph-report__top">Сегодня</div>
          <div class="graph-report__sum">22 000</div>
          <div class="graph-report__date dark:text-black-700">1 декабря</div>
        </div>
        <div
          @click="isWeeklyModalOpen = true"
          class="graph-report__link bg-black-300 dark:bg-black-800"
        >
          <div class="graph-report__top">Неделя</div>
          <div class="graph-report__sum">22 000</div>
          <div class="graph-report__date dark:text-black-700">1-14 декабря</div>
        </div>
        <div
          @click="isMonthlyModalOpen = true"
          class="graph-report__link bg-black-300 dark:bg-black-800"
        >
          <div class="graph-report__top">Месяц</div>
          <div class="graph-report__sum">22 000</div>
          <div class="graph-report__date dark:text-black-700">1-31 декабря</div>
        </div>
      </div>
      <canvas class="border-b pb-6 border-black-600 mb-5" ref="canvas"></canvas>
      <div class="graph-info">
        <div
          class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="graph-card__title">452 000</div>
          <div class="graph-card__text">Выручка</div>
        </div>
        <div
          class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="graph-card__title">13 000</div>
          <div class="graph-card__text">Себестоимость товара</div>
        </div>
        <div
          class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="graph-card__title">120 000</div>
          <div class="graph-card__text">Сумма заказа</div>
        </div>
        <div
          class="graph-card bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="graph-card__title">1 235</div>
          <div class="graph-card__text">Средний чек</div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <div class="today-modal">
      <div
        class="overlay"
        v-if="isTodayModalOpen"
        @click="isTodayModalOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isTodayModalOpen }"
      >
        <div class="title dark:text-white">Сегодня</div>
        <div class="subtitle dark:text-black-700">28 декабря 2021г.</div>
        <div class="check dark:text-white">Средний чек</div>
        <div class="subtitle dark:text-black-700">0</div>
        <div class="report-modal">
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Выручка</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Прибыль</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Продажи</div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Возврат продажи
            </div>
            <div class="report-modal__text red">2</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Сумма продажи</div>
            <div class="report-modal__text green">11111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Сумма возврата
            </div>
            <div class="report-modal__text red">111111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость продаж
            </div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость возвратов
            </div>
            <div class="report-modal__text red">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Рентабельность
            </div>
            <div class="report-modal__text green">1%</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Маржинальность
            </div>
            <div class="report-modal__text red">1%</div>
          </div>
        </div>
        <button
          class="report-modal__btn dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white"
        >
          Показать график
        </button>
      </div>
    </div>
    <div class="weekly-modal">
      <div
        class="overlay"
        v-if="isWeeklyModalOpen"
        @click="isWeeklyModalOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isWeeklyModalOpen }"
      >
        <div class="title dark:text-white">Неделя</div>
        <div class="subtitle dark:text-black-700">14-21 декабря 2021г.</div>
        <div class="check dark:text-white">Средний чек</div>
        <div class="subtitle dark:text-black-700">0</div>
        <div class="report-modal">
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Выручка</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Прибыль</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Продажи</div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Возврат продажи
            </div>
            <div class="report-modal__text red">2</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Сумма продажи</div>
            <div class="report-modal__text green">11111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Сумма возврата
            </div>
            <div class="report-modal__text red">111111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость продаж
            </div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость возвратов
            </div>
            <div class="report-modal__text red">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Рентабельность
            </div>
            <div class="report-modal__text green">1%</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Маржинальность
            </div>
            <div class="report-modal__text red">1%</div>
          </div>
        </div>
        <button
          class="report-modal__btn dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white"
        >
          Показать график
        </button>
      </div>
    </div>
    <div class="monthly-modal">
      <div
        class="overlay"
        v-if="isMonthlyModalOpen"
        @click="isMonthlyModalOpen = false"
      ></div>
      <div
        class="sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isMonthlyModalOpen }"
      >
        <div class="title dark:text-white">Месяц</div>
        <div class="subtitle dark:text-black-700">1-31 декабря 2021г.</div>
        <div class="check dark:text-white">Средний чек</div>
        <div class="subtitle dark:text-black-700">0</div>
        <div class="report-modal">
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Выручка</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Прибыль</div>
            <div class="report-modal__text dark:text-black-700">1111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Продажи</div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Возврат продажи
            </div>
            <div class="report-modal__text red">2</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">Сумма продажи</div>
            <div class="report-modal__text green">11111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Сумма возврата
            </div>
            <div class="report-modal__text red">111111</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость продаж
            </div>
            <div class="report-modal__text green">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Себестоимость возвратов
            </div>
            <div class="report-modal__text red">1</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Рентабельность
            </div>
            <div class="report-modal__text green">1%</div>
          </div>
          <div class="report-modal__items">
            <div class="report-modal__title dark:text-white">
              Маржинальность
            </div>
            <div class="report-modal__text red">1%</div>
          </div>
        </div>
        <button
          class="report-modal__btn dark:bg-blueish text-black-900 border-black-900 rounded border dark:text-white"
        >
          Показать график
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      isTodayModalOpen: false,
      isWeeklyModalOpen: false,
      isMonthlyModalOpen: false,
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

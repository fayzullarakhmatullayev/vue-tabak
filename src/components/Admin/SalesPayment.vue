<template>
  <div class="sales-payment border-b dark:border-black-700">
    <input
      type="search"
      placeholder="Сумма"
      class="border-black-800 dark:bg-black-900 w-full rounded-lg sales-payment__search"
    />
    <div class="sales-payment__select">
      <div class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg">
        <div class="sales-content__inner">
          <h3>Безналичный</h3>
        </div>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-stroke"
        >
          <path
            d="M5 0.999999L1 6L5 11"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div class="sales-content__box bg-black-300 dark:bg-black-800 rounded-lg">
        <div class="sales-content__inner">
          <p>Дата/Время</p>
          <h4 class="text-white">13.12.2021 13:15</h4>
        </div>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-stroke"
        >
          <path
            d="M5 0.999999L1 6L5 11"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
    <div
      class="sales-payment__check bg-black-300 dark:bg-black-800 rounded-lg text-black-700"
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="svg-stroke"
      >
        <path
          d="M10.45 28H18.55C25.3 28 28 25.3 28 18.55V10.45C28 3.7 25.3 1 18.55 1H10.45C3.7 1 1 3.7 1 10.45V18.55C1 25.3 3.7 28 10.45 28Z"
          stroke="#8D8E90"
          stroke-opacity="0.6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 12C16.433 12 18 10.6569 18 9C18 7.34315 16.433 6 14.5 6C12.567 6 11 7.34315 11 9C11 10.6569 12.567 12 14.5 12Z"
          stroke="#8D8E90"
          stroke-opacity="0.6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 23L8.3761 18.7152C9.39783 18.0291 10.8722 18.1068 11.7905 18.8964L12.2173 19.2718C13.2261 20.1392 14.8557 20.1392 15.8645 19.2718L21.2447 14.6505C22.2535 13.7832 23.8831 13.7832 24.8919 14.6505L27 16.4628"
          stroke="#8D8E90"
          stroke-opacity="0.6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Чек об оплате</p>
    </div>
    <div class="sales-payment__payed">
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3.5L2.5 5L6.5 1"
          stroke="#21B140"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>Оплата включена</p>
    </div>
  </div>
  <button class="sales-payment__btn rounded-lg">Добавить оплату</button>
</template>

<script>
export default {};
</script>

<style></style>

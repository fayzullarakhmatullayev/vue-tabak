<template>
  <div class="logs-filter">
    <div class="logs-filter__top">
      <div class="subtext" @click="$router.go(-1)">
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 0.999999L1 6L5 11"
            stroke="#5181B8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Назад</p>
      </div>
      <div class="title">Фильтр</div>
      <div class="subtext">Готово</div>
    </div>
    <div class="logs-filter__period">
      <div class="logs-filter__pertitle">Период</div>
      <div class="logs-filter__inner">
        <input
          type="date"
          class="border-black-800 dark:bg-black-900 rounded-lg report-input text-center mr-2"
        />
        <input
          type="date"
          class="border-black-800 dark:bg-black-900 rounded-lg report-input text-center mr-2"
        />
      </div>
    </div>
    <div class="logs-filter__wrapper">
      <div class="logs-filter__pertitle">Свойства</div>
      <ul class="logs-filter__ul">
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
          @click="isTypeDocument = true"
        >
          <div class="logs-filter__content">
            <p>Тип документа</p>
            Продажа
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
          @click="isStatusDocument = true"
        >
          <div class="logs-filter__content">
            <p>Статус документа</p>
            Проведен
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
          @click="isStatusOrder = true"
        >
          <div class="logs-filter__content">
            <p>Статус заказа</p>
            Оформлен
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
          @click="isStatusPayment = true"
        >
          <div class="logs-filter__content">
            <p>Статус оплаты</p>
            Оплаченные
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div class="logs-filter__wrapper">
      <div class="logs-filter__pertitle">Контрагенты</div>
      <div class="logs-filter__shorts">
        <div
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="logs-filter__content">
            <p>Отправитель</p>
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="logs-filter__content">
            <p>Получатель</p>
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="logs-filter__wrapper">
      <div class="logs-filter__pertitle">Связи</div>
      <ul class="logs-filter__ul border-none">
        <li
          class="logs-filter__list bg-black-300 dark:bg-black-800 dark:border-black-700"
        >
          <div class="logs-filter__content">
            <p>Сотрудник</p>
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
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  </div>
  <teleport to="body">
    <div class="modal-sales">
      <div
        class="overlay"
        v-if="isTypeDocument"
        @click="isTypeDocument = false"
      ></div>
      <div
        class="sort logs-sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isTypeDocument }"
      >
        <div class="title dark:text-white logs-modal__title">
          Тип документа <span>Очистить</span>
        </div>
        <div class="wrapper">
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-green"></span>Продажа
            </div>
            <input checked type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-blue"></span>Закупка
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-red"></span>Возврат продажи
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-orange"></span>Возврат закупки
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-dblue"></span>Оприходование
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-purple"></span>Списание
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-pink"></span>Инвентаризация
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
        </div>
      </div>
    </div>
    <div class="modal-document">
      <div
        class="overlay"
        v-if="isStatusDocument"
        @click="isStatusDocument = false"
      ></div>
      <div
        class="sort logs-sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isStatusDocument }"
      >
        <div class="title dark:text-white logs-modal__title">
          Статус документа <span>Очистить</span>
        </div>
        <div class="wrapper">
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">Проведен</div>
            <input checked type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">Отложен</div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">Удален</div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
        </div>
      </div>
    </div>
    <div class="modal-order">
      <div
        class="overlay"
        v-if="isStatusOrder"
        @click="isStatusOrder = false"
      ></div>
      <div
        class="sort logs-sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isStatusOrder }"
      >
        <div class="title dark:text-white logs-modal__title">
          Статус заказа <span>Очистить</span>
        </div>
        <div class="wrapper">
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-orange"></span>Оформлен
            </div>
            <input checked type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-blue"></span>Подтвержден
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-green"></span>Отгружен
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">
              <span class="b-red"></span>Отменен
            </div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
        </div>
      </div>
    </div>
    <div class="modal-document">
      <div
        class="overlay"
        v-if="isStatusPayment"
        @click="isStatusPayment = false"
      ></div>
      <div
        class="sort logs-sort card-img bg-black-300 dark:bg-black-800 dark:border-black-700 dark:text-black-700"
        :class="{ 'sort-active': isStatusPayment }"
      >
        <div class="title dark:text-white logs-modal__title">Статус оплаты</div>
        <div class="wrapper">
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">Оплаченные</div>
            <input checked type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
          <label
            class="form-control border-black-600 border-b dark:text-white logs-modal__link"
          >
            <div class="logs-modal__inner">Неоплаченные</div>
            <input type="radio" name="sort" />
            <div class="checkmark"></div
          ></label>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isTypeDocument: false,
      isStatusDocument: false,
      isStatusOrder: false,
      isStatusPayment: false,
    };
  },
};
</script>

<style></style>

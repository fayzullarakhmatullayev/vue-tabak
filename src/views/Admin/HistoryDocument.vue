<template>
  <div class="sales">
    <filter-top :ready="true">История изменений</filter-top>
    <div class="sales-history pt-20">
      <div class="sales-history__title">Изменено по ООО “Дымок”</div>
      <div class="sales-history__subtitle">
        (Администратор 01.01.2022 13:45)
      </div>
      <ul class="sales-history__ul">
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Поле</p>
            <span></span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Позиции (наименование,кол-во, ед.изм.,цена)
            </div>
          </div>
        </li>
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Было</p>
            <span></span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">короб;</span>
              448,00;
            </div>
          </div>
        </li>
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Стало</p>
            <span></span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">блок;</span> 448,00;
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="sales-history">
      <div class="sales-history__title">Изменено по ООО “Дымок”</div>
      <div class="sales-history__subtitle">
        (Администратор 01.01.2022 13:45)
      </div>
      <ul class="sales-history__ul">
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Поле</p>
            <span></span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Позиции (наименование,кол-во, ед.изм.,цена)
            </div>
          </div>
        </li>
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Было</p>
            <span>Добавлены</span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">короб;</span>
              448,00;
            </div>
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">короб;</span>
              448,00;
            </div>
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">короб;</span>
              448,00;
            </div>
          </div>
        </li>
        <li class="sales-history__list border-b dark:border-black-700">
          <div class="sales-history__left">
            <p>Стало</p>
            <span>Удалены</span>
          </div>
          <div class="sales-history__content">
            <div class="sales-history__content__list">
              Жевательный табак Oden’s 1.00;
              <span class="text-orange">блок;</span> 448,00;
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FilterTop from "@/components/Admin/FilterTop.vue";
export default {
  components: { FilterTop },
};
</script>

<style></style>

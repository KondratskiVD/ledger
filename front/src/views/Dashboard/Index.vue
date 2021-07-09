<template>
  <div class="dashboard">
    <nav class="menu">
      <div class="menu-section">
        <div class="menu-item">
          <div class="menu-item__icon">
            <span class="menu-item__amount menu-item__amount--income">4200$</span>
          </div>
          <p class="menu-item__title">Баланс</p>
        </div>
        <div class="menu-item">
          <div class="menu-item__icon">
            <img :src="IconAnalytics"/>
          </div>
          <p class="menu-item__title">Аналитика</p>
        </div>
      </div>

      <div class="menu-section menu-section--middle">
        <div class="menu-item menu-item--middle">
          <div class="menu-item__icon menu-item__icon--middle">
            <img src="@/assets/images/Girl.png" alt="avatar" width="85" height="85">
          </div>
          <p class="menu-item__title menu-item__title--middle">Профиль</p>
        </div>
      </div>

      <div class="menu-section">
        <div class="menu-item">
          <div class="menu-item__icon">
            <span class="menu-item__amount menu-item__amount--expense">500$</span>
          </div>
          <p class="menu-item__title">Расход</p>
        </div>
        <div class="menu-item">
          <div class="menu-item__icon">
            <img :src="IconBacket"/>
          </div>
          <p class="menu-item__title">Добавить</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import IconAnalytics from "@/assets/icons/icon-analytics.svg"
import IconBacket from "@/assets/icons/icon-backet.svg"

export default defineComponent({
  name: 'Dashboard',
  components: { IconAnalytics, IconBacket },
  setup() {
    return {
      IconAnalytics,
      IconBacket
    }
  }
})
</script>

<style scoped lang="scss">
.dashboard {
  min-height: 400px;
  display: flex;
  flex-direction: column;

  .menu {
    width: 100%;
    padding: 2em;
    display: flex;
    flex: 1;
    justify-content: space-between;

    &-section {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      display: flex;

      &--middle {
        flex: 1;
        justify-content: center;
      }
    }

    &-item {

      &__icon {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        box-shadow: -13px -13px 17px rgba(255, 255, 255, 0.8),
        13px 13px 17px rgba(212, 219, 230, 1);
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(212, 219, 230, 1);
        }

        &:active {
          opacity: 1;
          box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
          color: #40C1AC;
        }

        &--middle, &--middle:active,  &--middle:hover  {
          width: 110px;
          height: 110px;
          box-shadow: inset -13px -13px 17px rgba(255, 255, 255, 0.8),
          inset 13px 13px 17px rgba(212, 219, 230, 1);
        }
      }
      &__amount {
        &--income {
          color: #40C1AC;
        }
        &--expense {
          color: #ff7272;
        }
      }

      &__title {
        padding-top: 1em;
        text-align: center;
        font-weight: bold;

        &--middle {
          color: #616E7D;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

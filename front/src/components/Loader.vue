<template>
  <div class="loader">
    <img :src="Spinner" class="spinner"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Spinner from "@/assets/icons/loader.svg"

export default defineComponent({
  name: "Loader",
  setup() {
    return {
      Spinner
    }
  }
})
</script>

<style scoped lang="scss">
.loader {
  position: fixed;
  background: #E9EDF0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .spinner {
    animation: spin 1.5s infinite linear;
  }
}
@keyframes spin {
  0%  {-webkit-transform: rotate(0deg);}
  100% {-webkit-transform: rotate(360deg);}
}
</style>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
  components: { }
})
</script>

<style lang="scss" scoped>
.app {
  background: #E9EDF0;
  height: 100vh;
  padding: 0 15px;
}
</style>

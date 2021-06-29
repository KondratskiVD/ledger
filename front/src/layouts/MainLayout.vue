<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: { }
})
</script>

<style lang="scss" scoped>

.app {
  min-height: 100vh;
  padding-bottom: var(--global-bottom-spacing);
  box-sizing: border-box;
}
</style>

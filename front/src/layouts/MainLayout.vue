<template>
  <div class="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { Header }
})
</script>

<style lang="scss" scoped>

.app {
  min-height: 100vh;
  padding-bottom: var(--global-bottom-spacing);
  box-sizing: border-box;
  background: #E9EDF0;
}
</style>

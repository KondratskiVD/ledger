<template>
  <component :is="layout"></component>
</template>
<script lang="ts">
import { defineComponent, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    AuthLayout
  },
  setup () {
    const route = useRoute()

    watch(
      () => route.meta.layout,
      () => {
        if (typeof route.meta.layout === 'string') {
          document.body.className = route.meta.layout.toLowerCase()
        }
      }
    )

    return {
      layout: computed(() => route.meta.layout || 'AuthLayout')
    }
  }
})
</script>
<style lang="scss">

</style>

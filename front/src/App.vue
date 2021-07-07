<template>
  <component :is="layout"></component>
  <notify/>
</template>
<script lang="ts">
import { defineComponent, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Notify from '@/components/Notification.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    AuthLayout,
    Notify
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

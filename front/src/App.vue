<template>
  <component :is="layout"></component>
  <notify/>
  <loader v-if="isLoading"/>
</template>
<script lang="ts">
import { defineComponent, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Notify from '@/components/Notification.vue'
import Loader from '@/components/Loader.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    AuthLayout,
    Notify,
    Loader
  },
  setup () {
    const route = useRoute()
    const store = useStore()

    watch(
      () => route.meta.layout,
      () => {
        if (typeof route.meta.layout === 'string') {
          document.body.className = route.meta.layout.toLowerCase()
        }
      }
    )

    const isAuth = computed(() => store.getters['auth/getAuthData'])
    const isLoading = computed(() => store.state.loader.isLoading)
    return {
      layout: computed(() => isAuth.value ? route.meta.layout : 'AuthLayout'),
      isAuth,
      isLoading
    }
  }
})
</script>
<style lang="scss">

</style>

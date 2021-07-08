<template>
  <div class="notification-list">
    <NotificationMessage
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import NotificationMessage from '@/components/NotificationMessage.vue'

export default defineComponent({
  name: 'Notification',
  components: {
    NotificationMessage
  },
  setup () {
    const store = useStore()

    return {
      notifications: computed(() => store.state.notify.notifications)
    }
  }
})
</script>

<style lang="scss" scoped>
  .notification-list {
    position: fixed;
    top: 15px;
    right: 15px;
    left: 15px;
  }
</style>

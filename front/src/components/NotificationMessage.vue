<template>
  <div :class="typeClass" class="notification">
    <p class="message">{{ notification.message }}</p>
  </div>
</template>

<script>
import { defineComponent, computed, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NotificationMessage',
  props: ['notification'],
  setup (props) {
    const store = useStore()
    const typeClass = computed(() => {
      return `notification--${props.notification.type}`
    })

    const timeout = setTimeout(() => {
      store.dispatch('notify/removeNotification', props.notification)
    }, 155500)
    onBeforeUnmount(() => {
      clearTimeout(timeout)
    })
    return {
      typeClass,
      timeout
    }
  }
})
</script>

<style scoped lang="scss">
.notification {
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  .message {
    text-align: center;
    padding: 15px;
    font-size: 2.5em;
    color: white;
    margin-bottom: 15px;
    text-shadow: 1px 1px 1px #575757;
  }
  &--error {
    background: #ff7272;
  }
  &--success {
    background: #40c1ac;
  }
}
</style>

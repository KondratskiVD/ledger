<template>
  <div :class="typeClass">
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
    }, 1500)
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

  .message {
    text-align: center;
    padding: 15px;
    font-size: 2.5em;
    color: white;
    margin-bottom: 15px;
  }
  &--error {
    background: crimson;
  }
  &--success {
    background: #81dc28;
  }
}
</style>

<template>
    <div class="header">
        <button @click="logOut">
            logout
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Header',
  setup () {
    const store = useStore()
    const route = useRouter();

    const logOut = async () => {
        await store.dispatch('auth/logout')
        route.push("/login");
    }

    return {
      logOut
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
    padding: 1em;
    background: gray;
}
</style>

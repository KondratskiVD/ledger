<template>
    <div class="header">
      <button class="button button--home">
        <img :src="IconHome" class="icon-home"/>
      </button>
        <button @click="logOut" class="button button--logout">
          <img :src="IconLogout" class="icon-logout"/>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import IconLogout from "@/assets/icons/icon-logout.svg"
import IconHome from "@/assets/icons/icon-home.svg"

export default defineComponent({
  name: 'Header',
  components: {
    IconLogout,
    IconHome
  },
  setup () {
    const store = useStore()
    const route = useRouter();

    const logOut = async () => {
        await store.dispatch('auth/logout')
        route.push("/login");
    }

    return {
      logOut,
      IconLogout,
      IconHome
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 1em;
  background: #E9EDF0;
  display: flex;
  justify-content: space-between;
  box-shadow: inset -1px -3px 4px #d3dbe6, inset 3px 3px 4px #ffffff;

  .button {
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
    background: #E9EDF0;
  }

  .icon-logout {
    transform: rotate(270deg);
  }
}
</style>

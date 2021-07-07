<template>
  <div class="login">
    <div class="logo">
      <span>LOGO</span>
    </div>
    <SignIn/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SignIn from '@/views/Sign/components/SignIn'
// import SignUp from '@/views/Sign/SignUp'

export default defineComponent({
  name: 'Login',
  components: {
    // SignUp,
    SignIn
  }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .logo {
    width: calc(100% + 30px);
    margin-top: -30px;
    height: 35%;
    background: #40C1AC;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: white;
      font-size: 39px;
    }
  }
}

</style>

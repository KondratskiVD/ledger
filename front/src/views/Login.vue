<template>
  <div class="login">
    <div class="logo">
      <span>LOGO</span>
    </div>
    <SignUp/>
    <SignIn/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SignIn from '@/views/Sign/SignIn'
import SignUp from '@/views/Sign/SignUp'

export default defineComponent({
  name: 'Login',
  components: { SignUp, SignIn }
})
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

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

.social-links__container {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}

.social-links__button {
  margin: 0 5px 10px 5px;
}

.button {
  padding: 10px;
  border-radius: 12px;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  background: #E9EDF0;
  color: #616E7D;
  transition: all 0.1s ease-in-out;
}

.button_simple {
  box-shadow: inset 0 -3px 4px #d3dbe6, inset 0 3px 4px #ffffff;
}

.button_submit {
  border-radius: 12px;
  box-shadow: -13px -13px 17px rgba(255, 255, 255, 0.8),
  13px 13px 17px rgba(212, 219, 230, 1);

  &:hover {
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(212, 219, 230, 1);
  }

  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #40C1AC;
  }
}

.input-group__field {
  width: calc(100% - 20px);
  border: 1px solid transparent;
  background: #E9EDF0;
  padding: 10px;
  border-radius: 12px;
  margin: 5px 0;
  box-shadow: inset 0 -3px 4px #ffffff, inset 0 3px 4px #d3dbe6;
}

</style>

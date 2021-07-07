<template>
  <div class="social-links">
    <p class="social-links__title">Войти через социальную сети</p>
    <div class="social-links__container">
      <button class="button button_simple social-links__button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="8" fill="#004680"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.6545 11.4479C15.2804 11.4304 15.9063 11.4391 16.5411 11.4391C16.6216 11.4391 16.6931 11.4391 16.8004 11.4391V8.23409C16.4607 8.19897 16.1119 8.15506 15.7632 8.1375C15.1194 8.11116 14.4756 8.07603 13.8319 8.09359C12.8483 8.11116 11.9184 8.34824 11.1047 8.919C10.1748 9.57757 9.65619 10.5084 9.46842 11.5972C9.38794 12.045 9.37006 12.5192 9.35218 12.9758C9.33429 13.6958 9.35218 14.4159 9.35218 15.1359V15.4081H6.22266V18.9907H9.33429V28H13.1344V19.0083H16.2282C16.3891 17.8141 16.5411 16.6374 16.7021 15.4081C16.4517 15.4081 16.2282 15.4081 16.0046 15.4081C15.1194 15.4081 13.0987 15.4081 13.0987 15.4081C13.0987 15.4081 13.1076 13.6344 13.1255 12.8616C13.1523 11.8079 13.7872 11.483 14.6545 11.4479Z"
                fill="white"/>
        </svg>
      </button>

      <button class="button button_simple social-links__button">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect x="2" y="3" width="23" height="22.0417" fill="url(#pattern0)"/>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="translate(0 -0.0217391) scale(0.000833333)"/>
            </pattern>
            <image id="image0" width="1200" height="1200"
                   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwBAMAAAAZD678AAAAD1BMVEUAAAD7vAVChfQ0qFPqQzWdsYhRAAAAAXRSTlMAQObYZgAAFlxJREFUeNrt3dttI0kSBdCkmgY0QRlA0AKB5YA+2n+bFpjd2R5Mv/SoqMyIONcCTtbhvclqYXcMEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXlnzt9+kVdnI3uC+iHOSnYmpb8k0BRdEogKLvlJvu0a5yn7VZXikmhVbFEVG0fsXsWWpCgrk6is1JYkKyu0sLKIkmgD0cIKLUnKCi2s0JJcrNDyS9DLB8nFCi0raA8lFSu0rKA9lER1pbTUldKSbKyUlhVUWpKnrpQWV0pLvuWL0lJXSktdkSW968occqW0zCBZoq7MIVdkmUFzKFyRZQbNIVdkCVfm0PWKLK7IEq5ctFyvyOKKLOGKLK7I4oos4cprB68ZyOKKLOGKLK7I4oos4Yosrsjiiizhiiyu/OuOf8chS7giiyuyuCJLuCKLK7K8aPA6S7giiyuyuCLLxV1c4LkiiyuyuBLXLBd3srgiiytxzXLBIosrsgyhuGZxRRZXxtAFS8jiiixD6JrFlZBlCI0hV2QZQjGGXJFlCI0hV0KWITSGXJFlCMUYcqWyDCFZCkuMIVdkGUJjyJWoLENIlsIyhlwJQobQGCoslcUVWWIIjaHCUllckSWG0BgqLJWlsFSWcEWWITSGCktlicJSWVyRZQiNocISlaWwVBZXZBlCMYYKS2UpLJWlsERlcUWWITSGCktUlsJSWQpLZSksIUthGUOuwDKEYgoVlsJSWApLYYnCUlgKS2EpLIUlCkthKSyFpbAUligsrhSWIVRYCksUlsJSWApLYSksUVgKS2EpLIWlsERhKSyFpbAUlsIShaWwFJbCUlgKSxSWwlJYCkthKSxRWApLYSkshaWwRGEpLIWlsBQWWKKwLKHCUlgKS2GJwlJYCkthKSyFJQpLFJbCUlgKSxSWKCyFpbDAkq6FZQkVlsJSWApLFJYoLIWlsBSWKCxRWGApLEsoCksUlsJSWApLYSksUVhgKSxLqLAUligshaWwFJbCAksUliVUWApLYSksUVgK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"/>
          </defs>
        </svg>
      </button>
    </div>
  </div>
  <form
    @submit.prevent="signIn"
    class="registration-form">
    <p class="registration-form__title">Войти через почту и пароль:</p>
    <div class="input-group registration-form__input-group">
      <input v-model="email" class="input-group__field" type="email" id="email" placeholder="Введите E-mail">
    </div>
    <div class="input-group registration-form__input-group">
      <input v-model="password" class="input-group__field" type="password" id="password" placeholder="Придумайте пароль">
    </div>
    <div class="registration-form__submit">
      <button class="button button_submit">
        Отправить
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SignIn',
  setup () {
    const email = ref('test@test.com')
    const password = ref('123123')
    const error = ref(null)
    const isLoading = ref(false)
    const store = useStore()

    const signIn = () => {
      store.dispatch('auth/login', { email: email.value, password: password.value })
    }

    return {
      email,
      password,
      error,
      isLoading,
      signIn
    }
  }
})
</script>

<style scoped lang="scss">
.social-links {
  &__container {
    display: flex;
    justify-content: center;
    margin: 5px 0;
  }
  &__button {
    margin: 0 5px 10px 5px;
  }
}

.registration-form {
  width: 100%;
  &__submit {
    padding-top: 20px;
    text-align: center;
  }
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

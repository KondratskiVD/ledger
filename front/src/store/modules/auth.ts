import { jwtDecrypt } from '@/utils/jwtHelper'
import { AuthState, RootState } from '@/types'
import {
  ActionTree,
  MutationTree
} from 'vuex'
import { signIn } from '@/api/auth'
import { NOTIFICATION_SUCCESS, NOTIFICATION_ERROR } from '@/constants'

const state: AuthState = {
  authData: {
    token: '',
    refreshToken: '',
    tokenExp: '',
    userId: '',
    userName: '',
    userEmail: ''
  },
  loginStatus: 'failed'
}

const mutations: MutationTree<AuthState> = {
  saveTokenData (state, data) {
    localStorage.setItem('access_token', data.accessToken)
    localStorage.setItem('refresh_token', '')

    const tokenData = jwtDecrypt(data.accessToken)
    const authData = {
      token: data.accessToken,
      refreshToken: '',
      tokenExp: tokenData.exp,
      userId: tokenData.id,
      userName: tokenData.userName,
      userEmail: tokenData.email
    }
    state.authData = authData
  },
  setLoginStatus (state, value) {
    state.loginStatus = value
  }
}

const actions: ActionTree<AuthState, RootState> = {
  login ({ commit, dispatch }, payload: { email: string, password: string}) {
    const user = signIn(payload.email, payload.password)
    user
      .then((userInfo) => {
        commit('saveTokenData', userInfo)
        commit('setLoginStatus', 'success')
        dispatch('notify/addNotification', {
          type: NOTIFICATION_SUCCESS,
          message: 'Welcome'
        }, { root: true })
      })
      .catch(err => {
        dispatch('notify/addNotification', {
          type: NOTIFICATION_ERROR,
          message: err
        }, { root: true })
      })
  },
  logout ({ commit }) {
    commit('setLoginStatus', 'failed')
  }
}

const getters = {
  getAuthData(state: { loginStatus: string }):string{
    return state.loginStatus;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

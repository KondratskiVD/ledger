import { Loading, RootState } from '@/types'

import {
  ActionTree,
  MutationTree
} from 'vuex'

const state = {
  isLoading: false
}

const mutations: MutationTree<Loading> = {
  CHANGE_LOADING (state, value) {
    state.isLoading = value
  },
}

const actions: ActionTree<Loading, RootState> = {
  addLoading ({ commit }) {
    commit('CHANGE_LOADING', true)
  },
  removeLoading ({ commit }) {
    commit('CHANGE_LOADING', false)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

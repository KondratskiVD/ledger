import { NotifyState, RootState, Notification } from '@/types'

import {
  ActionTree,
  MutationTree
} from 'vuex'

const state: NotifyState = {
  notifications: []
}

const mutations: MutationTree<NotifyState> = {
  PUSH_NOTIFICATION (state, notification) {
    state.notifications.push({ ...notification, id: (Math.random().toString(36) + Date.now().toString(36).substr(2)) })
  },
  REMOVE_NOTIFICATION (state, removedNotification) {
    state.notifications = state.notifications.filter((notification: Notification) => removedNotification.id !== notification.id)
  }
}

const actions: ActionTree<NotifyState, RootState> = {
  addNotification ({ commit }, notification) {
    commit('PUSH_NOTIFICATION', notification)
  },
  removeNotification ({ commit }, notification) {
    commit('REMOVE_NOTIFICATION', notification)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

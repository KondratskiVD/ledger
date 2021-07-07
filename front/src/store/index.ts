import { createStore, Store } from 'vuex'
import authModule from './modules/auth'
import notify from './modules/notify'
import { RootState } from '@/types'

const store: Store<RootState> = createStore({
  modules: {
    auth: authModule,
    notify
  }
})

export default store

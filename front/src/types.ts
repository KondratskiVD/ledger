export interface AuthState {
  authData: {
    token: string,
    refreshToken: string,
    tokenExp: string,
    userId: string,
    userName: string,
    userEmail: string
  },
  loginStatus: string
}
export interface Notification {
  id: string,
  type: string,
  message: string
}

export interface Loading {
  isLoading: boolean
}

export interface NotifyState {
  notifications: Notification[]
}

export interface RootState {
  auth: AuthState,
  Loading
}

export interface UserInfo {
  accessToken: string
}



import { UserInfo } from '@/types'
import axios from 'axios'

export const signIn = async (email: string, password: string): Promise<UserInfo> => {
  try {
    const signInResponse = await axios.post('http://localhost:3000/api/auth/signin', {
      email,
      password
    })
    return signInResponse.data
  } catch (error) {
    const { message } = error.response.data
    throw message
  }
}

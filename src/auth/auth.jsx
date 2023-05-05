import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post(`/sessions`, { email, password })
      const { admin, user, token } = response.data

      if (admin) {
        localStorage.setItem('@rocketfood:admin', JSON.stringify(admin))
        localStorage.setItem('@rocketfood:token', token)

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({ admin, token })
      } else {
        localStorage.setItem('@rocketfood:user', JSON.stringify(user))
        localStorage.setItem('@rocketfood:token', token)

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({ user, token })
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar.')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@rocketfood:user')
    localStorage.removeItem('@rocketfood:admin')
    localStorage.removeItem('@rocketfood:token')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketfood:user')
    const admin = localStorage.getItem('@rocketfood:admin')
    const token = localStorage.getItem('@rocketfood:token')

    if (admin) {
      if (admin && token) {
        api.defaults.headers.authorization = `Bearer ${token}`

        setData({
          token,
          admin: JSON.parse(admin)
        })
      }
    } else {
      if (user && token) {
        api.defaults.headers.authorization = `Bearer ${token}`

        setData({
          token,
          user: JSON.parse(user)
        })
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        admin: data.admin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

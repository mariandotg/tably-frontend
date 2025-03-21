'use client'

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { useRouter } from 'next/navigation'

type AuthContextType = {
  loading: boolean
  isLoggedIn: boolean
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check')
        if (res.ok) {
          const data = await res.json()
          setToken(data.token)
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
          setToken(null)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        setIsLoggedIn(false)
        setToken(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        // Re-check auth status to update the context
        const authCheck = await fetch('/api/auth/check')
        if (authCheck.ok) {
          const data = await authCheck.json()
          setToken(data.token)
          setIsLoggedIn(true)
          return true
        }
      }
      return false
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout')
      setIsLoggedIn(false)
      setToken(null)
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ loading, isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

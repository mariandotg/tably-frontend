'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch('/api/auth/check') // API to check auth status
      if (res.ok) {
        const data = await res.json()
        setToken(data.token)
      } else {
        router.push('/login') // Redirect to login if not authenticated
      }
      setLoading(false)
    }

    fetchToken()
  }, [router])

  return { loading, token }
}

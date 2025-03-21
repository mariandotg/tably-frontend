'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: React.FormEvent) => {
    data.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        router.push('/')
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('An error occurred during login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input
          name="email"
          type="email"
          placeholder="darthvader@deathstar.com"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          name="password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
        <Label htmlFor="password">Must have at least 6 characters</Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </>
  )
}

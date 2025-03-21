'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (data: any) => {
    data.preventDefault()

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/')
    } else {
      alert('Invalid register')
    }
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Register</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input
          name="email"
          type="email"
          placeholder="darthvader@deathstar.com"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          name="password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Label htmlFor="password">Must have at least 6 characters</Label>
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}

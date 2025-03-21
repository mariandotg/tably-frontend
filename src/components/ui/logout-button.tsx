'use client'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from './button'

export default function LogoutButton() {
  const { logout } = useAuth()

  return <Button onClick={logout}>Logout</Button>
}

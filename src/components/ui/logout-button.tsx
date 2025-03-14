'use client'
import { useRouter } from 'next/navigation'
import { Button } from './button'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout')
    router.push('/login')
  }

  return <Button onClick={handleLogout}>Logout</Button>
}

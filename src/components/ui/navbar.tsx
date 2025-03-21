'use client'

import { useAuth } from '@/contexts/AuthContext'
import LogoutButton from './logout-button'

function Navbar() {
  const { isLoggedIn } = useAuth()

  return (
    <nav className="bg-[#192048] text-sky-200 p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Tably</div>
      {isLoggedIn && <LogoutButton />}
    </nav>
  )
}

export default Navbar

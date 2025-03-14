import { TablyAPI } from '@/lib/api/tably-api'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const res = await TablyAPI.login(email, password)

  if (res.status !== 201) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    )
  }

  const { token } = await res.data

  // Set token as HTTP-only cookie
  const response = NextResponse.json({ message: 'Login successful' })
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  })

  return response
}

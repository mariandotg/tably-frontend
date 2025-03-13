import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="flex flex-col gap-2">
        <Label htmlFor="email">Email:</Label>
        <Input type="email" placeholder="darthvader@deathstar.com" id="email" />
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" />
        <Label htmlFor="password">Must have at least 6 characters</Label>
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}

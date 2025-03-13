export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="flex flex-col">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

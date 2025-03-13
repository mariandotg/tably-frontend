export default function RegisterPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Register</h1>
      <form className="flex flex-col">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <main style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>You are not signed in</h2>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </main>
    )
  }

  return (
    <main style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Welcome, {session.user.name}</h2>
      <img src={session.user.image} alt="avatar" style={{ borderRadius: "50%", width: 50 }} />
      <p>{session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </main>
  )
}

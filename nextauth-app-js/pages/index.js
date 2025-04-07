import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/Home.module.css"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <main className={styles.container}>
        <div className={styles.card}>
          <h2>Welcome to NextAuth!</h2>
          <p>Please sign in to continue</p>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img src={session.user.image} alt="avatar" className={styles.avatar} />
        <h2>Hello, {session.user.name}!</h2>
        <p>{session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </main>
  )
}

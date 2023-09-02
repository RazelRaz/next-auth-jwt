import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link replace href="/login">Login</Link>
        <br></br>
        <Link replace href="/dashboard">Dashboard</Link>
      </div>
    </main>
  )
}

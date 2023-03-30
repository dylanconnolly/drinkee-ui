import Link from 'next/link';
import styles from '@component/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Drinks() {
  return (
    <>
    <h1>Drinks list page</h1>

    <Link className={styles.card} href="/">
      <h2 className={inter.className}>
        Home <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Go back to homepage
      </p>
    </Link>
    </>
  )

}
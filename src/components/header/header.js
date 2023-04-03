import styles from './header.module.css';
import Link from 'next/link'

export default function Header({ children }) {
  return (
    <div className={styles.container}>
      <h1>Drinks list page</h1>
      <Link className={styles.card} href="/">
        <h2>
          Home <span>-&gt;</span>
        </h2>
        <p>
          Go back to homepage
        </p>
      </Link>

      { children } 
    </div>
  )
}
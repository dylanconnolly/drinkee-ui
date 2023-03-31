import styles from './card.module.css'
import Image from 'next/image'

export default function Card({ drink }) {

  return (
    <>
    <div className={styles.card}>
      <div className={styles.cardImage}>
      <Image
              src="/Manhattan-Cocktail-059s2.png"
              alt="Fallback Img"
              // className={styles.vercelLogo}
              width={150}
              height={150}
              priority
            />
      </div>
      <div className={styles.cardContent}>
        <h2>{drink.displayName}</h2>
      </div>
    </div>
    </>
  )
}
import styles from './card-container.module.css';

export default function CardContainer({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
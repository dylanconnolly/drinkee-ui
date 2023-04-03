import styles from './CardContainer.module.css';

export default function CardContainer({ children }: any) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
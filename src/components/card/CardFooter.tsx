import styles from './CardFooter.module.css'
import { useState, MouseEvent } from 'react';
import ExpandMoreButton from '../buttons/ExpandMoreButton';

export default function CardFooter ({ data }: any) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
    return expanded
      // gets icon element as child of button
    // event.currentTarget.firstElementChild.classList.toggle('up')
  }

  const showDetailsClassName = expanded ? styles.blackmeShow : styles.blackmeHidden

  return (
    <>
    <div className={styles.container}>
      <ExpandMoreButton isExpanded={expanded} onClick={handleExpandClick} />
    </div>
      {/* { expanded ? <p className={styles.blackme}>{data}</p>: ''}   */}
    <p className={showDetailsClassName}>
      {data}
    </p>
    </>
  )
}
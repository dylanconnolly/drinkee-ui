import styles from './card-footer.module.css'
import { useState, MouseEvent } from 'react';

export default function CardFooter ({ data }: any) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (event: MouseEvent<HTMLButtonElement> ) => {
    setExpanded(!expanded)
    console.log(expanded)
    
    const target = event.currentTarget as Element;
    target.classList.toggle('expanded')
    console.log(target)
      // gets icon element as child of button
    // event.currentTarget.firstElementChild.classList.toggle('up')
  }

  return (
    <>
    <div className={styles.container}>
      <button className={styles.expandMoreButton} onClick={handleExpandClick}>
        <div className={styles.expandMoreIcon}>
            {/* {expanded ? <span>&#8963;</span>: <span>&#8964;</span>} */}
            {expanded ? <span className="material-symbols-outlined">expand_less</span>: <span className="material-symbols-outlined">expand_more</span>}
        </div>
      </button>
    </div>
    { expanded ? <p className={styles.blackme}>{data}</p>: ''}
    </>
  )
}
import styles from './card-footer.module.css'
import { useState, MouseEvent } from 'react';

export default function CardFooter () {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (event: MouseEvent<HTMLButtonElement> ) => {
    setExpanded(!expanded)
    console.log(expanded)
    
    const target = event.target as Element;
    target.classList.toggle('expand')

      // gets icon element as child of button
    // event.currentTarget.firstElementChild.classList.toggle('up')
  }

  return (
    <>
    <div className={styles.container}>
      <button className={styles.expandMoreButton} onClick={handleExpandClick}>
        <div className={styles.expandMoreIcon}>
          random text{/* <span>&#8964;</span> */}
          {/* {expanded ? <span>&#8963;</span>: <span>&#8964;</span>} */}
        </div>
      </button>
    </div>
    { expanded ? <p>i'm expanded a bit weeee</p>: ''}
    </>
  )
}
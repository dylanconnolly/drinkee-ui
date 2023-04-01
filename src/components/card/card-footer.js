import styles from './card-footer.module.css'
import { useState } from 'react';

export default function CardFooter () {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (event) => {
    setExpanded(!expanded)
    console.log(expanded)
    event.currentTarget.style.transform = "rotate('180deg')"
      // gets icon element as child of button
    // event.currentTarget.firstElementChild.classList.toggle('up')
  }

  return (
    <>
    <div className={styles.container}>
      <button className={styles.expandMoreButton} onClick={handleExpandClick}>
        <icon className={styles.expandMoreIcon}>
          random text{/* <span>&#8964;</span> */}
          {/* {expanded ? <span>&#8963;</span>: <span>&#8964;</span>} */}
        </icon>
      </button>
    </div>
    { expanded ? <p>i'm expanded a bit weeee</p>: ''}
    </>
  )
}
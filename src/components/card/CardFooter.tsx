import styles from './CardFooter.module.css'
import { useState, MouseEvent } from 'react';
import ExpandMoreButton from '../buttons/ExpandMoreButton';
import { DrinkIngredient } from '@component/types/drinkIngredient';

export default function CardFooter ({ instructions, ingredients }: any) {
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
    <div className={showDetailsClassName}>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient: DrinkIngredient) => (
        <div>
          {ingredient.displayName} - {ingredient.measurement}
        </div>
      ))}
      <br />
      <h2>Instructions</h2>
      <p>
        {instructions}
      </p>
    </div>
    </>
  )
}
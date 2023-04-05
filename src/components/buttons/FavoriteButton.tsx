import styles from './FavoriteButton.module.css';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useState } from 'react';

export default function FavoriteButton({ isFavorite }: any) {
  const [favorited, setFavorited] = useState(false);

  const iconStyle = favorited ? styles.iconFavorited : styles.icon

  const handleClick = () => {
    setFavorited(!favorited);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <MdFavorite className={iconStyle} />
      {/* {favorited ? <MdFavorite className={styles.icon} /> : <MdFavoriteBorder className={styles.icon} />} */}
    </button>
  )
}
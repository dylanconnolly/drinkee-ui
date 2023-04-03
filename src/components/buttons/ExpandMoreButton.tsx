import { useState, MouseEvent } from 'react';
import styles from './ExpandMoreButton.module.css';
import { FaAngleDown } from 'react-icons/fa';

export default function ExpandMoreButton({ isExpanded, onClick }: any) {
  const iconClassName = isExpanded ? styles.iconExpanded : styles.icon;
  
  return (
    <button className={styles.button} onClick={onClick}>
      <FaAngleDown className={iconClassName} />
    </button>
  );
}
import { useProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import React, { useCallback } from "react";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className="", style } : Props ) => {
  const { counter, increaseBy, maxCount } = useProductContext()

  const isMaxReached = useCallback(() => (
    !!maxCount && counter === maxCount
  ), [counter, maxCount])

  return (
    <div className={ `${styles.buttonsContainer} ${className}` } style={style}>
      <button className={ styles.buttonMinus } onClick={ () => increaseBy(-1)}>
        -
      </button>
      <div className={ styles.countLabel }>{ counter }</div>
      <button 
        className={ `${styles.buttonAdd} ${isMaxReached() ? styles.disabled : '' }` } 
        onClick={ () => increaseBy(1)}
      >
        +
      </button>
    </div>
  )
}
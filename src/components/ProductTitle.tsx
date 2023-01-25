import { useProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import React from 'react'

export interface Props { 
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className="", style }: Props) => {
  const { product: { title : productTitle} } = useProductContext()
  return (
      <span className={ `${styles.productDescription} ${className}` } style={style}>
        { title || productTitle }
      </span>
  )
}
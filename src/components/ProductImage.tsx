import { useProductContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import React from 'react'

export interface Props { 
  className?: string;
  img?: string ; 
  style?: React.CSSProperties; 
}

export const ProductImage = ({ img, className='', style }: Props ) => {
  const { product: { img : image } } = useProductContext()
  return (
    <img 
      className={ `${styles.productImg} ${className}` } 
      src={ img || image || noImage } 
      alt='Product' 
      style={style} 
    />
  )
}
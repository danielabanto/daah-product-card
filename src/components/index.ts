import { ProductCard as PC } from './ProductCard'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export const ProductCard: ProductCardHOCProps = Object.assign( PC,{
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
})


// En caso de querer la otra forma

export {ProductTitle}
export {ProductImage}
export {ProductButtons}
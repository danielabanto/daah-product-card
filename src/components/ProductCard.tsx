import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'
import React,{ createContext, useContext } from 'react'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces'
export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  onChange?: ( args: onChangeArgs ) => void
  initialValues?: InitialValues;
}

const initalState: ProductContextProps = {
  counter: 0,
  increaseBy: () => null,
  product: { id: '', title: ''}
}

const ProductContext = createContext<ProductContextProps>(initalState)
const { Provider } = ProductContext

export const useProductContext = () => useContext(ProductContext)

export const ProductCard = ({ product, children, className="", style, value, onChange, initialValues }: ProductCardProps) => {
  const { 
    counter, 
    increaseBy, 
    maxCount,
    isMaxCountReached,
    reset
  } = useProducts({ onChange, product, value, initialValues })

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        }) }
      </div>
    </Provider>
  )
}

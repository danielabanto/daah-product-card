import { useState, useEffect, useRef } from "react"
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({ product, onChange, value=0, initialValues }: Props ) => {

  const [ counter, setCounter ] = useState<number>( initialValues?.count || value )
  const isMounted = useRef(false)

  const increaseBy = ( value: number ) => {
    let newValue = 
      Math.max( counter + value, 0 )
    if ( initialValues?.maxCount ) {
      newValue = Math.min( newValue, initialValues.maxCount )
    }
    setCounter( newValue )
    onChange && onChange({ count: newValue,  product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if ( !isMounted.current ) {
      isMounted.current = true 
      return;
    }
    setCounter(value)
    return () => { isMounted.current = false }
  }, [value])

  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
  }
}
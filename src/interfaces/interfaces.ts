import { ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number,
  increaseBy: (val: number) => void,
  product: Product,
  maxCount?: number,
}

export interface ProductCardHOCProps {
  ( props: ProductCardProps): JSX.Element,
  Title: ( props: ProductTitleProps ) => JSX.Element
  Image: ( props: ProductImageProps ) => JSX.Element
  Buttons: ( props: ProductButtonsProps ) => JSX.Element
}

export interface onChangeArgs {
  product: Product, 
  count: number,
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value: number ) => void;
  reset: () => void;
}
## DAAH-Product-Card

Este es un paquete de pruebas de un despliegue en NPM

### Daniel Abanto

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'daah-product-card'
```

```
<ProductCard 
  product={ product } 
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {
    ({ reset, count, increaseBy, isMaxCountReached }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```
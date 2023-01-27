import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const producto = {
  id: '1',
  title:'Coffee Mug - Card Example',
  // img:'./coffee-mug.png'
}

const App = () => {
  return (
    <ProductCard 
      product={ producto } 
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

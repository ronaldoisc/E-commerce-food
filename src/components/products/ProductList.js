import React from 'react';
import { Louder } from '../ui/Louder';
import { ProductCard } from './ProductCard';

export const ProductList = ({allProducts,loading}) => {
  return (
    <div className="row">

    {
      loading === true ?
        <Louder loading={loading} />
        :
        allProducts.map(allProduct => {
          return <ProductCard allProduct={allProduct}/>
        })
    }

  </div>

  );
};

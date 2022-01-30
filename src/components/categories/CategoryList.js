import React from 'react';
import { CategoryCard } from './CategoryCard';

export const CategoryList = ({ categories }) => {
  return (
    <div className="row">
      {
        categories.map(category => {
          return <CategoryCard key={category} category={category} />
        })
      }
    </div>
  )
};

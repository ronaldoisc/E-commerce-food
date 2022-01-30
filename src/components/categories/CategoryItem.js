import React from 'react';

export const CategoryItem = ({handleClickCategory,category}) => {
  return <li onClick={() => handleClickCategory(category)} key={category} className="nav-item"><a className="nav-link" data-toggle="tab" href="#man" role="tab">{category}</a></li>;
};

import React from 'react';

export const CategoryItem = ({ handleClickCategory, categories }) => {
  return (
    <ul className="nav nav-tabs" id="myTab" >
      {
        categories.map(category => {
          return  <li onClick={() => handleClickCategory(category)} key={category} className="nav-item"><a className="nav-link" data-toggle="tab" href="#man" >{category}</a></li>
        })
      }
    </ul>
  )
};

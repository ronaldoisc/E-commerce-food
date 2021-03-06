import React from 'react';
import { useDispatch } from 'react-redux';
import { cartAddNew } from '../../actions/cart';

export const ProductCard = ({allProduct}) => {

  const dispatch = useDispatch();

  const handleAddProduct = (productId) => {
    dispatch(cartAddNew(productId));
}
  return <div key={allProduct.id} className="single-list">
  <div className="row">
    <div className="col-lg-5 col-md-6 col-12">
      <div className="list-image overlay">
        <img src={allProduct.image} alt="#" height={100} />
        <a onClick={()=>handleAddProduct(allProduct.id)} href="#w" className="buy"><i className="fa fa-shopping-bag" /></a>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-12 no-padding">
      <div className="content">
        <h4 className="title"><a href="https://fakestoreapi.com/docs">{allProduct.title}</a></h4>
        <p className="price with-discount">{`$${allProduct.price}`}</p>
      </div>
    </div>
  </div>
</div>
};

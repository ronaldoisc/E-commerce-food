import React from 'react';
import { useDispatch } from 'react-redux';
import { cartAddNew } from '../../actions/cart';

export const ProductCategoryCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddProduct = (productId) => {
        dispatch(cartAddNew(productId));
    }
    
    return <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-12">
        <div className="single-product">
            <div className="product-img">
                <a href="product-details.html">
                    <img className="default-img" src={product.image} alt="#" height={100} width={100} />
                </a>
                <div className="button-head">
                    <div className="product-action-2">
                        <a onClick={() => handleAddProduct(product.id)} title="Add to cart" href="#w">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><a href="product-details.html">{product.title}</a></h3>
                <div className="product-price">
                    <span>{`$${product.price}`}</span>
                </div>
            </div>
        </div>
    </div>
};

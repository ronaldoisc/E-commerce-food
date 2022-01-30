import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteCart } from '../../actions/cart';
import { AppBar } from '../ui/AppBar';

export const CartScreen = () => {
  const { userCart } = useSelector(state => state.cart);
 const dispatch = useDispatch();


  const [total, settotal] = useState(0);



  useEffect(() => {
    let total = 0;
    userCart.map(userc => {
      total += userc.price
      return settotal(total);
    })


  }, [userCart]);


  const handleDeleteCart=(ProductId)=>{
    dispatch(startDeleteCart(ProductId))
  }


  return <div>
    <AppBar />

    {/* Shopping Cart */}
    <div className="shopping-cart section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Shopping Summery */}
            <table className="table shopping-summery">
              <thead>
                <tr className="main-hading">
                  <th>IMAGE PRODUCT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">PRICE</th>
                  <th className="text-center"><i className="ti-trash remove-icon" /></th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart.map((userc,i) => {
                    return <tr key={i}>
                     
                      <td className="image" data-title="No"><img src={userc.image} alt="#" /></td>
                      <td className="product-des" data-title="Description">
                        <p className="product-name"><a href="#w">{userc.title}</a></p>
                        <p className="product-des">{userc.description}</p>
                      </td>
                      <td className="price" data-title="Price"><span>{`$${userc.price}`} </span></td>
                      <td className="action" data-title="Remove"><a onClick={()=>handleDeleteCart(userc.id)} href="#w"><i className="ti-trash remove-icon" /></a></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
            {/*/ End Shopping Summery */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Total Amount */}
            <div className="total-amount">
              <div className="row">
                <div className="col-lg-8 col-md-5 col-12">
                </div>
                <div className="col-lg-4 col-md-7 col-12">
                  <div className="right">
                    <ul>
                      <li className="last">Total<span>{`$${total}`}</span></li>
                    </ul>
                    <div className="button5">
                      <a href="#w" className="btn">Checkout</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Total Amount */}
          </div>
        </div>
      </div>
    </div>
    {/*/ End Shopping Cart */}

  </div>;
};

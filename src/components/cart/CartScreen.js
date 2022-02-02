

import { useCart } from '../../hooks/useCart';
import { AppBar } from '../ui/AppBar';
import { TableCart } from './TableCart';

export const CartScreen = () => {
  
    const {userCart,total,handleDeleteCart}=useCart();
  
  return <div>
    <AppBar />
    <div className="shopping-cart section">
      <div className="container">
        <div className="row">
          <div className="col-12">
           <TableCart userCart={userCart} handleDeleteCart={handleDeleteCart}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
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
         
          </div>
        </div>
      </div>
    </div>

  </div>;
};

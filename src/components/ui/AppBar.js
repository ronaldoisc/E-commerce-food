import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const AppBar = () => {
  const dispatch = useDispatch();


  const { auth,cart } = useSelector(state => state);

  const {user}=auth;
  const {userCart}=cart;



  const handleLogout = () => {
    dispatch(startLogout());

  }

  return (

    <header className="header shop">
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              {/* Top Left */}
              <div className="top-left">
                <ul className="list-main">
                  <li><i className="ti-headphone-alt" /> 231-1030318</li>
                  <li><i className="ti-email" /> tellezleal9928@gmail.com</li>
                </ul>
              </div>
              {/*/ End Top Left */}
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              {/* Top Right */}
              <div className="right-content">
                <ul className="list-main">
                  <li><i className="ti-location-pin" /> Mexico</li>
                  <li><i className="ti-alarm-clock" /> <a href="#w">Daily deal</a></li>
                  <li><i className="ti-user" /> <a href="#w">{user.username}</a></li>
                  <li>
                    <i className="ti-power-off" />
                    <a href="#w" onClick={handleLogout}>Logout</a>

                  </li>
                </ul>
              </div>
              {/* End Top Right */}
            </div>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              {/* Logo */}
              <div className="logo">
                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
              </div>
              {/*/ End Logo */}
              {/* Search Form */}
              <div className="search-top">
                <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                {/* Search Form */}
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit"><i className="ti-search" /></button>
                  </form>
                </div>
                {/*/ End Search Form */}
              </div>
              {/*/ End Search Form */}
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">


                  <form>
                    <input name="search" placeholder="Search a product here.." type="search" />
                    <button className="btnn"><i className="ti-search" /></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* Search Form */}

                <div className="sinlge-bar shopping">
                  <a href="#w" className="single-icon"><i className="ti-bag" /> <span className="total-count">{(userCart && userCart.length)}</span></a>
                  {/* Shopping Item */}
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>{(userCart && userCart.length)} products</span>
                   <Link to={"/cart"}>View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                     {
                       userCart &&
                       userCart.map(product=>{
                         return  <li key={product.id}>
                         <a href="#w" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                         <a className="cart-img" href="#w"><img src={product.image} alt="#" /></a>
                         <h4><a href="#w">{product.title}</a></h4>
                         <p className="quantity"> <span className="amount">{`$${product.price}`}</span></p>
                       </li>
                       })
                     }
                     
                    </ul>
                    <div className="bottom">
                      {/* <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div> */}
                      <a href="checkout.html" className="btn animate">Checkout</a>
                    </div>
                  </div>
                  {/*/ End Shopping Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">

              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* Main Menu */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active"><Link to={"/"}>Home</Link></li>
                          <li><Link to="/cart">Cart</Link></li>
                          <li>  <Link to="/contact">Contact us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Header Inner */}
    </header>
  );
};

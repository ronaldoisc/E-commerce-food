import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startLoadingCategories } from '../../actions/products';

export const AppBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingCategories());
  }, [dispatch]);
  
  const { categories } = useSelector(state => state.data);
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
                  <li><i className="ti-alarm-clock" /> <a href="#">Daily deal</a></li>
                  <li><i className="ti-user" /> <a href="#">Mi cuenta</a></li>
                  <li><i className="ti-power-off" /><a href="login.html#">Iniciar Sesión</a></li>
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
                    <input name="search" placeholder="Busca un producto aqui.." type="search" />
                    <button className="btnn"><i className="ti-search" /></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* Search Form */}
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                </div>
                <div className="sinlge-bar shopping">
                  <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></a>
                  {/* Shopping Item */}
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="#">View Cart</a>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                        <h4><a href="#">Woman Ring</a></h4>
                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                      </li>
                      <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                        <h4><a href="#">Woman Necklace</a></h4>
                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
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
              <div className="col-lg-3">
                <div className="all-category">
                  <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true" />CATEGORIAS</h3>
                  <ul className="main-category">
                    {
                        categories.map(category => {
                          return <li key={category}><a href="#">{category} <i className="fa fa-angle-right" aria-hidden="true" /></a>
                          </li>
                        })
                    }
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* Main Menu */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active"><a href="#">Inicio</a></li>
                          <li><a href="#">Productos</a></li>
                          <li><a href="#">Nosotros</a></li>
                          <li><a href="contact.html">Contactanos</a></li>
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

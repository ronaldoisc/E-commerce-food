import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startLoadingProductsByCategory } from '../../actions/products';
import { setCategoryImage } from '../../helpers/utils';

export const EcommerceScreen = () => {
  const { categories, products } = useSelector(state => state.data);

  const dispatch = useDispatch();


  const handleClickCategory = (category) => {

    dispatch(startLoadingProductsByCategory(category))
  }
  
  return (
    <div>
      <section className="hero-slider">
        {/* Single Slider */}
        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1>¿Qué es lo que necesitas?</h1>
                        <p>Nosotros complecemos tus antojs, asi que pide <br />ahora y nosotros lo llevamos hasta la puerta<br /> de tu casa en tan un par de minutos!</p>
                        <div className="button">
                          <a href="https://fakestoreapi.com/docs" className="btn">Comienza ahora</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Single Slider */}
      </section>
      {/*/ End Slider Area */}
      {/* Start Small Banner  */}
      <section className="small-banner section">
        <div className="container-fluid">
          <h1>Categorias</h1>
          <hr />
          <div className="row">

            {
              categories.map(category => {

                return <div className="col-lg-3 col-12">
                  <div className="single-banner tab-height">
                    <img src={setCategoryImage(category)} alt="" />
                    <div className="content">
                     <h1>{category}</h1>
                     
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
      {/* End Small Banner */}
      {/* Start Product Area */}
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Products by category</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">
                  {/* Tab Nav */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {
                      categories.map(category => {
                        return <li onClick={() => handleClickCategory(category)} key={category} className="nav-item"><a className="nav-link" data-toggle="tab" href="#man" role="tab">{category}</a></li>
                      })
                    }
                  </ul>
                  {/*/ End Tab Nav */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* Start Single Tab */}
                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">

                        {
                          products &&
                          products.map(product => {
                            return <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                              <div className="single-product">
                                <div className="product-img">
                                  <a href="product-details.html">
                                    <img className="default-img" src={product.image} alt="#" height={100} width={100} />

                                  </a>
                                  <div className="button-head">
                                    <div className="product-action">

                                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="https://fakestoreapi.com/docs"><i className=" ti-eye" /><span>{product.title}</span></a>
                                      <a title="Wishlist" href="https://fakestoreapi.com/docs"><i className=" ti-heart " /><span>{product.title}</span></a>
                                      <a title="Compare" href="https://fakestoreapi.com/docs"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                      <a title="Add to cart" href="https://fakestoreapi.com/docs">Add to cart</a>
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
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Area */}
      {/* Start Midium Banner  */}
      <section className="midium-banner">
        <div className="container">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>Man's items <br />Up to<span> 50%</span></h3>
                  <a href="https://fakestoreapi.com/docs">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>shoes women</p>
                  <h3>mid season <br /> up to <span>70%</span></h3>
                  <a href="https://fakestoreapi.com/docs" className="btn">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
      {/* End Midium Banner */}

      <section className="section free-version-banner mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 offset-md-2 col-xs-12">
              <div className="section-title mb-60">
                <span className="text-white wow fadeInDown" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInDown' }}>Eshop Free Lite version</span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>Currently You are using free<br /> lite Version of Eshop.</h2>
                <p className="text-white wow fadeInUp" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>Please, purchase full version of the template to get all pages,<br /> features and commercial license.</p>
                <div className="button">
                  <a href="hhttps://fakestoreapi.com/docs"  className="btn wow fadeInUp">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Shop Home List  */}
      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="https://fakestoreapi.com/docs" className="buy"><i className="fa fa-shopping-bag" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="https://fakestoreapi.com/docs">Licity jelly leg flat Sandals</a></h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Home List  */}
      {/* Start Shop Blog  */}
      <section className="shop-blog section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July , 2020. Monday</p>
                  <a href="https://fakestoreapi.com/docs" className="title">Sed adipiscing ornare.</a>
                  <a href="https://fakestoreapi.com/docs" className="more-btn">Continue Reading</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="https://fakestoreapi.com/docs" className="title">Man’s Fashion Winter Sale</a>
                  <a href="https://fakestoreapi.com/docs" className="more-btn">Continue Reading</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="https://fakestoreapi.com/doc" className="title">Women Fashion Festive</a>
                  <a href="https://fakestoreapi.com/doc" className="more-btn">Continue Reading</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Blog  */}
      {/* Start Shop Services Area */}
      <section className="shop-services section home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-rocket" />
                <h4>Free shiping</h4>
                <p>Orders over $100</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-reload" />
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-lock" />
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="ti-tag" />
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

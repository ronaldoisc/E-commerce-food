import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { startLoadingProductsByCategory } from '../../actions/products';
import { AppBar } from '../ui/AppBar';
import { Footer } from '../ui/Footer';
import { ProductCategoryCard } from '../products/ProductCategoryCard';
import { Louder } from '../ui/Louder';
import { CategoryList } from '../categories/CategoryList';
import { Banner } from '../ui/Banner';
import { Services } from '../ui/Services';
import { ProductList } from '../products/ProductList';
import { HeroSlider } from '../ui/HeroSlider';
import { CategoryItem } from '../categories/CategoryItem';



export const EcommerceScreen = () => {


  const dispatch = useDispatch();

  const { categories, products, allProducts } = useSelector(state => state.data);
  const { loading } = useSelector(state => state.ui);


  const handleClickCategory = (category) => {
    dispatch(startLoadingProductsByCategory(category))
  }

  return (
    <div>
      {/* routes */}
      <Outlet />
      {/* end routes */}
      <AppBar />
      <section className="hero-slider">
        <HeroSlider />
      </section>

      <section className="small-banner section">
        <div className="container-fluid">
          <h1>Categories</h1>
          <hr />
          <CategoryList categories={categories} />
        </div>
      </section>


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
                  <CategoryItem handleClickCategory={handleClickCategory} categories={categories}/>

                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        {
                          loading === true ?
                            <Louder loading={loading} />
                            :
                            products.map(product => {
                              return <ProductCategoryCard key={product.id} product={product} />
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

      <section className="section ecommerce-banner mt-5">
        <Banner />
      </section>

      <section className="shop-home-list section">
        <div className="container">
          <h1>All Products</h1>
          <ProductList allProducts={allProducts} loading={loading} />
        </div>
      </section>

      <section className="shop-services section home">
        <Services />
      </section>

      <Footer />
    </div>
  );
};

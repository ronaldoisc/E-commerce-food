import React from 'react';

export const Footer = () => {
    return (

        <footer className="footer">
       
          <div className="footer-top section">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-12">
              
                  <div className="single-footer about">
                    <div className="logo">
                      <a href="index.html"><img src="images/logo2.png" alt="logo" width={100} height={100} /></a>
                    </div>
                    <p className="text"> We are a Mexican company with more than 20 years of experience in e-commerce focused on the sale of products</p>
                    <p className="call">Do you have a question? call us<span><a href="tel:123456789">+52 2311030318</a></span></p>
                  </div>
              
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer links">
                    <h4>Information</h4>
                    <ul>
                      <li><a href="https://www.google.com.mx/">About us</a></li>
                    
                      <li><a href="https://www.google.com.mx/">Terms&amp; conditions</a></li>
                      <li><a href="https://www.google.com.mx/">Contact us</a></li>
                      <li><a href="https://www.google.com.mx/">Help</a></li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer links">
                    <h4>Customer client</h4>
                    <ul>
                      <li><a href="https://www.google.com.mx/">Payment methods</a></li>
                      <li><a href="https://www.google.com.mx/">Refuns</a></li>
                      <li><a href="https://www.google.com.mx/">Return</a></li>
                      <li><a href="https://www.google.com.mx/">Delivery</a></li>
                    
                    </ul>
                  </div>
                  {/* End Single Widget */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer social">
                    <h4>Get in touch</h4>
                    {/* Single Widget */}
                    <div className="contact">
                      <ul>
                        <li>NO. 342 - Teziutlán Puebla</li>
                        <li>E-commerce</li>
                        <li>delivery@gmail.com</li>
                        <li>+52 2311030318</li>
                      </ul>
                    </div>
                    {/* End Single Widget */}
                    <ul>
                      <li><a href="https://www.google.com.mx/"><i className="ti-facebook" /></a></li>
                      <li><a href="https://www.google.com.mx/"><i className="ti-twitter" /></a></li>
                      <li><a href="https://www.google.com.mx/"><i className="ti-flickr" /></a></li>
                      <li><a href="https://www.google.com.mx/"><i className="ti-instagram" /></a></li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                </div>
              </div>
            </div>
          </div>
          {/* End Footer Top */}
          <div className="copyright">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="left">
                      <p>Copyright © 2022 Ronaldo Tellez Leal-  Todos los derechos reservados.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="right">
                      <img src="images/payments.png" alt="payment" height={300} width={300} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
  
};

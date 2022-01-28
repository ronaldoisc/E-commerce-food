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
                      <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
                    </div>
                    <p className="text"> Somos una empresa mexicana con más 20 años de experiencia en el comercio electrónico  enfocado a la venta de comida rapida</p>
                    <p className="call">Tienes alguna duda? llamanos<span><a href="tel:123456789">+52 2311030318</a></span></p>
                  </div>
              
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer links">
                    <h4>Información</h4>
                    <ul>
                      <li><a href="#">Nosotros</a></li>
                    
                      <li><a href="#">Terminos &amp; Condiciones</a></li>
                      <li><a href="#">Contactanos</a></li>
                      <li><a href="#">Ayuda</a></li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer links">
                    <h4>Servicio al cliente</h4>
                    <ul>
                      <li><a href="#">Métodos de pago</a></li>
                      <li><a href="#">Reembolsos</a></li>
                      <li><a href="#">Devoluciones</a></li>
                      <li><a href="#">Envio</a></li>
                      <li><a href="#">Politica de privacidad</a></li>
                    </ul>
                  </div>
                  {/* End Single Widget */}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  {/* Single Widget */}
                  <div className="single-footer social">
                    <h4>Ponte en contacto</h4>
                    {/* Single Widget */}
                    <div className="contact">
                      <ul>
                        <li>NO. 342 - Teziutlán Puebla</li>
                        <li>E-commerce</li>
                        <li>ordenalo@gmail.com</li>
                        <li>+52 2311030318</li>
                      </ul>
                    </div>
                    {/* End Single Widget */}
                    <ul>
                      <li><a href="#"><i className="ti-facebook" /></a></li>
                      <li><a href="#"><i className="ti-twitter" /></a></li>
                      <li><a href="#"><i className="ti-flickr" /></a></li>
                      <li><a href="#"><i className="ti-instagram" /></a></li>
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
                      <p>Copyright © 2022 <a href="http://www.wpthemesgrid.com" target="_blank">Ronaldo Tellez Leal</a>  -  Todos los derechos reservados.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="right">
                      <img src="images/payments.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
  
};

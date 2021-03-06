import react from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Container from './Components/Home/Container';
import About from './Components/AboutUs/About';
import AppointmentForm from './Components/AboutUs/AppointmentForm';
import Services from './Components/Services/Services';
import Departments from './Components/Department/Department'
import Pricing from './Components/Pricing/Pricing'
import FunFacts from './Components/FunFact/FunFact'
import Doctor from './Components/Doctors/Doctors'
import Testimonial from './Components/Testimonial/Testimonial'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Gallary from './Components/Gallary/Gallary'


function App() {
  return (
    
     
      <div className="App">

      
        {/* <!-- Header --> */}
        <Header></Header>

        {/* <!-- Header --> */}
        {/* <header id="header" class="header">
        <div class="header-top bg-light sm-text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="widget">
                  <i class="fa fa-clock-o text-theme-colored"></i> Opening Hours:  Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget pull-right flip sm-pull-none">
                  <div id="side-panel-trigger" class="side-panel-trigger mt-5">
                    <a href="#"><i class="fa fa-bars text-theme-colored2 font-24"></i></a>
                  </div>
                </div>
                <div class="widget">
                  <ul class="list-inline pull-right flip sm-pull-none sm-text-center">
                    <li><i class="fa fa-phone text-theme-colored"></i> Call Us at <a href="#">+(012) 345 6789</a></li>
                    <li><i class="fa fa-envelope-o text-theme-colored"></i> <a href="#">contact@yourdomain.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-nav">
          <div class="header-nav-wrapper navbar-scrolltofixed bg-white">
            <div class="container">
              <nav id="menuzord-right" class="menuzord blue no-bg"><a class="menuzord-brand pull-left flip mb-15" href="index-mp-layout1.html"><img src="assets/images/logo-wide.png" alt="" /></a>
                <ul class="list-inline nav-side-icon-list pull-right">
                  <li>
                    <a href="#fullscreen-search-form" id="fullscreen-search-btn"><i class="search-icon fa fa-search"></i></a>
                    <div id="fullscreen-search-form" class="hanging-top-search-form">
                      <button type="button" class="close"></button>
                      <form>
                        <input type="search" value="" placeholder="Search keywords(s)" />
                        <button type="submit"><i class="search-icon fa fa-search"></i></button>
                      </form>
                    </div>
                  </li>
                  <li>
                    <div class="woocommerce top-nav-mini-cart-icon-container">
                      <div class="top-nav-mini-cart-icon-contents">
                        <a class="mini-cart-icon" href="#" title="View your shopping cart"><i class="icon_cart_alt"></i><span class="items-count">2</span> <span class="cart-quick-info">2 items - <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>38.00</span></span></a>
                        <div class="dropdown-content">
                          <div class="dropdown-content-wrapper">
                            <ul class="woocommerce-mini-cart cart_list product_list_widget ">
                              <li class="woocommerce-mini-cart-item mini_cart_item">
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="3265" data-product_sku=""></a>
                                <a href="#"><img src="http://placehold.it/68x68" alt="" width="68" />Happy Ninja&nbsp;</a>
                                <span class="quantity">1  <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">??</span>18.00</span></span>
                              </li>
                              <li class="woocommerce-mini-cart-item mini_cart_item">
                                <a href="#" class="remove" aria-label="Remove this item" data-product_id="31" data-product_sku=""></a>
                                <a href="#"><img src="http://placehold.it/68x68" alt="" width="68" />Ninja Silhouette&nbsp;</a>
                                <span class="quantity">1  <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">??</span>20.00</span></span>
                              </li>
                            </ul>
                            <div class="woocommerce-mini-cart__total total cart-subtotal">Subtotal: <span><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">??</span>38.00</span></span></div>
                            <div class="woocommerce-mini-cart__buttons buttons cart-action-buttons">
                              <div class="row">
                                <div class="col-xs-6 pr-5"><a href="http://kodesolution.net/demo/wp/medicale-wp/cart/" class="btn btn-gray btn-block wc-forward">View Cart</a></div>
                                <div class="col-xs-6 pl-5"><a href="http://kodesolution.net/demo/wp/medicale-wp/checkout/" class="btn btn-dark btn-theme-colored btn-block checkout wc-forward">Checkout</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><div id="side-panel-trigger" class="side-panel-trigger"><a href="#"><i class="fa fa-bars font-24"></i></a></div></li>
                </ul>
                <ul class="menuzord-menu">
                  <li class="active"><a href="#home">Home</a>
                    <ul class="dropdown">
                      <li><a href="#">Multipage Layouts</a>
                        <ul class="dropdown">
                          <li><a href="index-mp-layout1.html">Layout1</a></li>
                          <li><a href="index-mp-layout2.html">Layout2</a></li>
                          <li><a href="index-mp-layout3.html">Layout3</a></li>
                          <li><a href="index-mp-layout4.html">Layout4</a></li>
                          <li><a href="index-mp-layout5.html">Layout5</a></li>
                          <li><a href="index-mp-layout6.html">Layout6</a></li>
                          <li><a href="index-mp-layout7.html">Layout7</a></li>
                          <li><a href="index-mp-layout8.html">Layout8</a></li>
                          <li><a href="index-mp-layout9.html">Layout9</a></li>
                          <li><a href="index-mp-layout10.html">Layout10</a></li>
                          <li><a href="index-mp-layout11.html">Layout11</a></li>
                          <li><a href="index-mp-layout12.html">Layout12</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Singlepage Layouts</a>
                        <ul class="dropdown">
                          <li><a href="index-sp-layout1.html">Layout1</a></li>
                          <li><a href="index-sp-layout2.html">Layout2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Boxed Layouts</a>
                        <ul class="dropdown">
                          <li><a href="index-boxed-mp-layout1.html">Multipage Layout1</a></li>
                          <li><a href="index-boxed-mp-layout2.html">Multipage Layout2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">RTL Layouts</a>
                        <ul class="dropdown">
                          <li><a href="index-rtl-mp-layout1.html">Layout1</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Hot Layouts</a>
                        <ul class="dropdown">
                          <li><a href="index-hot-parallax-layout1.html">Hot Parallax Layout</a></li>
                          <li><a href="index-hot-slider-fullpage-layout1.html">Hot Fullpage Slider Layout</a></li>
                          <li><a href="index-hot-slider-pagepiling-layout1.html">Hot Slider Pagepiling Layout</a></li>
                          <li><a href="index-hot-slider-split-home-layout1.html">Hot Slider Split Layout</a></li>
                          <li><a href="index-hot-vertical-rev-slider-home-layout1.html">Hot Vertical Rev Slider Layout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Home Variations</a>
                        <ul class="dropdown">
                          <li><a href="#">Rev Slider</a>
                            <ul class="dropdown">
                              <li><a href="index-home-variation-revslider-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-revslider-style2.html">Layout2</a></li>
                              <li><a href="index-home-variation-revslider-style3.html">Layout3</a></li>
                              <li><a href="index-home-variation-revslider-style4.html">Layout4</a></li>
                              <li><a href="index-home-variation-revslider-style5.html">Layout5</a></li>
                              <li><a href="index-home-variation-revslider-style6.html">Layout6</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Maximage Slider</a>
                            <ul class="dropdown">
                              <li><a href="index-home-variation-maximageslider-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-maximageslider-style2.html">Layout2</a></li>
                              <li><a href="index-home-variation-maximageslider-style3.html">Layout3</a></li>
                            </ul>
                          </li>
                          <li><a href="index-home-variation-owl-carousel.html">Owl Carousel</a></li>
                          <li><a href="index-home-variation-owl-image-slider.html">Owl Image Slider</a></li>
                          <li><a href="index-home-variation-typed-text.html">Typed Text Layout</a></li>
                          <li><a href="index-home-variation-video-background.html">Youtube Background Video</a></li>
                          <li><a href="index-home-variation-html5-video.html">Html5 Background Video</a></li>
                          <li><a href="index-home-variation-bg-image-parallax.html">Bg Image Parallax Layout</a></li>
                          <li><a href="index-home-variation-bg-static.html">Bg Static Layout</a></li>
                          <li><a href="#">Home Appointment Form</a>
                            <ul class="dropdown">
                              <li><a href="index-home-variation-appointment-form-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-appointment-form-style2.html">Layout2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Features</a>
                    <ul class="dropdown">
                      <li><a href="features-preloader.html">Preloaders</a></li>
                      <li><a href="#">Layout Variations</a>
                        <ul class="dropdown">
                          <li><a href="#">Boxed Layout</a>
                            <ul class="dropdown">
                              <li><a href="features-index-boxed-layout1.html">Layout 1</a></li>
                              <li><a href="features-index-boxed-layout2.html">Layout 2</a></li>
                              <li><a href="features-index-boxed-layout3.html">Layout 3</a></li>
                              <li><a href="features-index-boxed-layout4.html">Layout 4</a></li>
                              <li><a href="features-index-boxed-layout5.html">Layout 5</a></li>
                            </ul>
                          </li>
                          <li><a href="#">RTL Layout</a>
                            <ul class="dropdown">
                              <li><a href="features-index-rtl-layout1.html">Layout 1</a></li>
                              <li><a href="features-index-rtl-layout2-boxed.html">Layout 2 - Boxed</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Header</a>
                        <ul class="dropdown">
                          <li><a href="features-header-style1.html">Header Style1</a></li>
                          <li><a href="features-header-style2.html">Header Style2</a></li>
                          <li><a href="features-header-style3.html">Header Style3</a></li>
                          <li><a href="features-header-style4.html">Header Style4</a></li>
                          <li><a href="features-header-style5.html">Header Style5</a></li>
                          <li><a href="features-header-style6.html">Header Style6</a></li>
                          <li><a href="features-header-style7.html">Header Style7</a></li>
                          <li><a href="features-header-style8.html">Header Style8</a></li>
                          <li><a href="features-header-style9.html">Header Style9</a></li>
                          <li><a href="features-header-style10-logo-middle.html">Header Style10 - Logo Middle</a></li>
                          <li><a href="features-header-style11-logo-centered.html">Style11 - Logo Centered</a></li>
                          <li><a href="features-header-style12-logo-centered-transparent.html">Style12 - Logo Centered Transparent</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Header Modern <span class="label label-success">New</span></a>
                        <ul class="dropdown">
                          <li><a href="#">Style 1</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style1.html">Dark</a></li>
                              <li><a href="features-header-modern-style1-white.html">White</a></li>
                              <li><a href="features-header-modern-style1-theme-colored.html">Theme Colored</a></li>
                              <li><a href="features-header-modern-style1-side-panel.html">Side Push Panel</a></li>
                              <li><a href="features-header-modern-style1-side-panel2.html">Side Push Panel 2</a></li>
                              <li><a href="features-header-modern-style1-contact-info-box.html">With Contact Info Box</a></li>
                              <li><a href="features-header-modern-style1-contact-info-box-small.html">With Contact Info Box Small</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 2</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style2.html">Dark</a></li>
                              <li><a href="features-header-modern-style2-white.html">White</a></li>
                              <li><a href="features-header-modern-style2-theme-colored.html">Theme Colored</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 3</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style3.html">Dark</a></li>
                              <li><a href="features-header-modern-style3-white.html">White</a></li>
                              <li><a href="features-header-modern-style3-theme-colored.html">Theme Colored</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 4</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style4.html">Dark</a></li>
                              <li><a href="features-header-modern-style4-white.html">White</a></li>
                              <li><a href="features-header-modern-style4-theme-colored.html">Theme Colored</a></li>
                              <li><a href="features-header-modern-style4-theme-colored2.html">Theme Colored2</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 5</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style5.html">Dark</a></li>
                              <li><a href="features-header-modern-style5-white.html">White</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 6</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style6.html">Dark</a></li>
                              <li><a href="features-header-modern-style6-white.html">White</a></li>
                              <li><a href="features-header-modern-style6-theme-colored.html">Theme Colored</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 7</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style7.html">Dark</a></li>
                              <li><a href="features-header-modern-style7-white.html">White</a></li>
                              <li><a href="features-header-modern-style7-theme-colored.html">Theme Colored</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Style 8</a>
                            <ul class="dropdown">
                              <li><a href="features-header-modern-style8.html">Dark</a></li>
                              <li><a href="features-header-modern-style8-white.html">White</a></li>
                              <li><a href="features-header-modern-style8-theme-colored.html">Theme Colored</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Header Floating <span class="label label-success">New</span></a>
                        <ul class="dropdown">
                          <li><a href="features-header-floating-header1.html">Sample 1</a></li>
                          <li><a href="features-header-floating-header2.html">Sample 2</a></li>
                          <li><a href="features-header-floating-header3.html">Sample 3</a></li>
                          <li><a href="features-header-floating-header4.html">Sample 4</a></li>
                          <li><a href="features-header-floating-header5.html">Sample 5</a></li>
                          <li><a href="features-header-floating-header6.html">Sample 6</a></li>
                          <li><a href="features-header-floating-header7.html">Sample 7</a></li>
                          <li><a href="features-header-floating-header8.html">Sample 8</a></li>
                          <li><a href="features-header-floating-header9.html">Sample 9</a></li>
                          <li><a href="features-header-floating-header10.html">Sample 10</a></li>
                          <li><a href="features-header-floating-header11.html">Sample 11</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Header Search Form</a>
                        <ul class="dropdown">
                          <li><a href="features-header-search-form-style1-fullscreen.html">Fullscreen Search</a></li>
                          <li><a href="features-header-search-form-style2-inline-fullwidth.html">Inline Fullwidth Search</a></li>
                          <li><a href="features-header-search-form-style3-inline-fullwidth-dropdown.html">Inline Fullwidth Dropdown</a></li>
                          <li><a href="features-header-search-form-style4-from-top-dropdown.html">Top Dropdown</a></li>
                          <li><a href="features-header-search-form-style5-pushdown-from-top.html">Pushdown From Top</a></li>
                          <li><a href="features-header-search-form-style6-dropdown.html">Dropdown</a></li>
                          <li><a href="features-header-search-form-style7-searchbox.html">Simple Search Box</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page Title</a>
                        <ul class="dropdown">
                          <li><a href="features-page-title-text-left.html">Text Left</a></li>
                          <li><a href="features-page-title-text-center.html">Text Center</a></li>
                          <li><a href="features-page-title-text-right.html">Text Right</a></li>
                          <li><a href="features-page-title-mini-version.html">Mini Version</a></li>
                          <li><a href="features-page-title-big-version.html">Big Version</a></li>
                          <li><a href="features-page-title-extra-big-version.html">Extra Big Version</a></li>
                          <li><a href="features-page-title-bg-white.html">Bg White</a></li>
                          <li><a href="features-page-title-bg-image.html">Bg Image</a></li>
                          <li><a href="features-page-title-bg-image-parallax.html">Bg Image Parallax</a></li>
                          <li><a href="features-page-title-bg-video.html">Bg Video</a></li>
                          <li><a href="features-page-title-full-transparent.html">Full Transparent</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Side Push Panel</a>
                        <ul class="dropdown">
                          <li><a href="features-side-push-panel-left-overlay.html">Left Overlay</a></li>
                          <li><a href="features-side-push-panel-left-push.html">Left Push</a></li>
                          <li><a href="features-side-push-panel-right-overlay.html">Right Overlay</a></li>
                          <li><a href="features-side-push-panel-right-push.html">Right Push</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Form</a>
                        <ul class="dropdown">
                          <li><a href="#">Subscribe Form</a>
                            <ul class="dropdown">
                              <li><a href="form-subscribe.html">Form style 1</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Appointment Form</a>
                            <ul class="dropdown">
                              <li><a href="form-appointment-style1.html">Form style 1</a></li>
                              <li><a href="form-appointment-style2.html">Form style 2</a></li>
                              <li><a href="form-appointment-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Job Apply Form</a>
                            <ul class="dropdown">
                              <li><a href="form-job-apply-style1.html">Form style 1</a></li>
                              <li><a href="form-job-apply-style2.html">Form style 2</a></li>
                              <li><a href="form-job-apply-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Quick Contact Form</a>
                            <ul class="dropdown">
                              <li><a href="form-quick-contact-style1.html">Form style 1</a></li>
                              <li><a href="form-quick-contact-style2.html">Form style 2</a></li>
                              <li><a href="form-quick-contact-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Paypal Form <span class="label label-success">New</span></a>
                        <ul class="dropdown">
                          <li><a href="#">Donation Onetime</a>
                            <ul class="dropdown">
                              <li><a href="form-paypal-donate-onetime-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-onetime-style2.html">Style2</a></li>
                              <li><a href="form-paypal-donate-onetime-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-onetime-style4.html">Style4</a></li>
                              <li><a href="form-paypal-donate-onetime-style5.html">Style5</a></li>
                              <li><a href="form-paypal-donate-onetime-style6.html">Style6</a></li>
                              <li><a href="form-paypal-donate-onetime-style7.html">Style7</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Donation Recurring</a>
                            <ul class="dropdown">
                              <li><a href="form-paypal-donate-recurring-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-recurring-style2.html"> Style2</a></li>
                              <li><a href="form-paypal-donate-recurring-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-recurring-style4.html">Style4</a></li>
                              <li><a href="form-paypal-donate-recurring-style5.html">Style5</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Both Onetime/Recurring</a>
                            <ul class="dropdown">
                              <li><a href="form-paypal-donate-both-onetime-recurring-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style2.html">Style2</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style4.html">Style4</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style5.html">Style5</a></li>
                            </ul>
                          </li>
                          <li><a href="form-paypal-cart-style1.html">Cart Payment</a></li>
                          <li><a href="form-paypal-order-style1.html">Order Payment Style1</a></li>
                          <li><a href="form-paypal-order-style2.html">Order Payment Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Popup Promo Box</a>
                        <ul class="dropdown">
                          <li><a href="features-popup-promo-box.html">Default</a></li>
                          <li><a href="features-popup-promo-box-cookie-enabled.html">Cookie Enabled</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Footer</a>
                        <ul class="dropdown">
                          <li><a href="features-footer-style10-fixed-footer.html#footer">Fixed Footer</a></li>
                          <li><a href="features-footer-style1.html#footer">Footer One</a></li>
                          <li><a href="features-footer-style2.html#footer">Footer Two</a></li>
                          <li><a href="features-footer-style3.html#footer">Footer Three</a></li>
                          <li><a href="features-footer-style4.html#footer">Footer Four</a></li>
                          <li><a href="features-footer-style5.html#footer">Footer Five</a></li>
                          <li><a href="features-footer-style6.html#footer">Footer Six</a></li>
                          <li><a href="features-footer-style7.html#footer">Footer Seven</a></li>
                          <li><a href="features-footer-style8.html#footer">Footer Eight</a></li>
                          <li><a href="features-footer-style9.html#footer">Footer Nine</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul class="dropdown">
                      <li><a href="#">About</a>
                        <ul class="dropdown">
                          <li><a href="page-about1.html">About Style 1</a></li>
                          <li><a href="page-about2.html">About Style 2</a></li>
                          <li><a href="page-about3.html">About Style 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Contact</a>
                        <ul class="dropdown">
                          <li><a href="page-contact1.html">Contact style 1</a></li>
                          <li><a href="page-contact2.html">Contact style 2</a></li>
                          <li><a href="page-contact3.html">Contact style 3</a></li>
                          <li><a href="page-contact4.html">Contact style 4</a></li>
                          <li><a href="page-contact5-with-multiple-marker.html">Contact 5 - Multiple Marker</a></li>
                          <li><a href="page-contact6-with-multiple-marker.html">Contact 6 - Multiple Marker</a></li>
                          <li><a href="page-contact7-google-recaptcha.html">Contact 7 - reCAPTCHA</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Gallery</a>
                        <ul class="dropdown">
                          <li><a href="page-gallery-3col.html">3 Columns</a></li>
                          <li><a href="page-gallery-3col-only-image.html">3 Columns Only Image</a></li>
                          <li><a href="page-gallery-4col.html">4 Columns</a></li>
                          <li><a href="page-gallery-4col-only-image.html">4 Columns Only Image</a></li>
                          <li><a href="page-gallery-grid.html">Grids (2-10 Columns)</a></li>
                          <li><a href="page-gallery-grid-animation.html">Grids with Animation (2-10 Columns)</a></li>
                          <li><a href="page-gallery-3col-tiles.html">3 Columns Tiles</a></li>
                          <li><a href="page-gallery-4col-tiles.html">4 Columns Tiles</a></li>
                          <li><a href="page-gallery-masonry-tiles.html">Tiles (2-10 Columns)</a></li>
                          <li><a href="page-gallery-masonry-tiles-animation.html">Tiles with Animation (2-10 Columns)</a></li>
                          <li><a href="page-gallery-prettyphoto.html">Pretty Photo Gallery</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Services</a>
                        <ul class="dropdown">
                          <li><a href="page-services1.html">Services Style 1</a></li>
                          <li><a href="page-services2.html">Services Style 2</a></li>
                          <li><a href="page-service-details.html">Service Details</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Departments</a>
                        <ul class="dropdown">
                          <li><a href="page-department1.html">Departments sytle 1</a></li>
                          <li><a href="page-department2.html">Departments sytle 2</a></li>
                          <li><a href="page-department-details.html">Departments Details</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Team</a>
                        <ul class="dropdown">
                          <li><a href="page-team-style1.html">Team Style 1</a></li>
                          <li><a href="page-team-style2.html">Team Style 2</a></li>
                          <li><a href="page-team-member-details.html">Team Member Details</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pricing</a>
                        <ul class="dropdown">
                          <li><a href="page-pricing-style1.html">Pricing Style 1</a></li>
                        </ul>
                      </li>
                      <li><a href="page-timetable.html">Timetable</a></li>
                      <li><a href="#">Calender</a>
                        <ul class="dropdown">
                          <li><a href="page-calendar1.html">Calendar Style1</a></li>
                          <li><a href="page-calendar2.html">Calendar Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Events</a>
                        <ul class="dropdown">
                          <li><a href="#">Events Grid</a>
                            <ul class="dropdown">
                              <li><a href="events-grid-2column.html">Grid 2column</a></li>
                              <li><a href="events-grid-3column.html">Grid 3column</a></li>
                              <li><a href="events-grid-4column.html">Grid 4column</a></li>
                              <li><a href="events-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                              <li><a href="events-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Events List</a>
                            <ul class="dropdown">
                              <li><a href="events-list-left-sidebar.html">List Left Sidebar</a></li>
                              <li><a href="events-list-right-sidebar.html">List Right Sidebar</a></li>
                              <li><a href="events-list-no-sidebar.html">List No Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Events Details</a>
                            <ul class="dropdown">
                              <li><a href="events-details-style1.html">Details Style1</a></li>
                              <li><a href="events-details-style2.html">Details Style2</a></li>
                              <li><a href="events-details-style3.html">Details Style3</a></li>
                            </ul>
                          </li>
                          <li><a href="events-table.html">Events Table</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Job <span class="label label-success">New</span></a>
                        <ul class="dropdown">
                          <li><a href="job-list.html">Job List</a></li>
                          <li><a href="job-details-style1.html">Job Details Style1</a></li>
                          <li><a href="job-details-style2.html">Job Details Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">FAQ</a>
                        <ul class="dropdown">
                          <li><a href="page-faq-style1.html">FAQ Style1</a></li>
                          <li><a href="page-faq-style2.html">FAQ Style2</a></li>
                          <li><a href="page-faq-style3.html">FAQ Style3</a></li>
                          <li><a href="page-faq-style4.html">FAQ Style4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page 404</a>
                        <ul class="dropdown">
                          <li><a href="page-404-style1.html">style1</a></li>
                          <li><a href="page-404-style2.html">style2</a></li>
                          <li><a href="page-404-style3.html">style3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Shop</a>
                        <ul class="dropdown">
                          <li><a href="shop-category.html">Category</a></li>
                          <li><a href="shop-category-sidebar.html">Category Sidebar</a></li>
                          <li><a href="shop-product-details.html">Product Details</a></li>
                          <li><a href="shop-cart.html">Cart</a></li>
                          <li><a href="shop-checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Coming Soon</a>
                        <ul class="dropdown">
                          <li><a href="page-coming-soon-style1.html">style1</a></li>
                          <li><a href="page-coming-soon-style2.html">style2</a></li>
                          <li><a href="page-coming-soon-style3.html">style3</a></li>
                          <li><a href="page-coming-soon-style4.html">style4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Under Construction</a>
                        <ul class="dropdown">
                          <li><a href="page-under-construction-style1.html">style1</a></li>
                          <li><a href="page-under-construction-style2.html">style2</a></li>
                          <li><a href="page-under-construction-style3.html">style3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Blog</a>
                    <ul class="dropdown">
                      <li><a href="#">Blog Classic</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-classic-no-sidebar.html">Blog Classic No Sidebar</a></li>
                          <li><a href="blog-classic-left-sidebar.html">Blog Classic Left Sidebar</a></li>
                          <li><a href="blog-classic-right-sidebar.html">Blog Classic Right Sidebar</a></li>
                          <li><a href="blog-classic-both-sidebar.html">Blog Classic Both Sidebar</a></li>
                          <li><a href="blog-classic-left-thumbs.html">Blog Classic Left Thumbs</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Grid</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-grid-2-column.html">Blog Grid 2 Column</a></li>
                          <li><a href="blog-grid-3-column.html">Blog Grid 3 Column</a></li>
                          <li><a href="blog-grid-4-column.html">Blog Grid 4 Column</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Masonry</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-masonry-2-column.html">Blog Masonry 2 Column</a></li>
                          <li><a href="blog-masonry-3-column.html">Blog Masonry 3 Column</a></li>
                          <li><a href="blog-masonry-4-column.html">Blog Masonry 4 Column</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Single</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-single-no-sidebar.html">Blog Single No Sidebar</a></li>
                          <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                          <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                          <li><a href="blog-single-both-sidebar.html">Blog Single Both Sidebar</a></li>
                          <li><a href="blog-single-disqus-comments.html">Blog Single Discuss Comments</a></li>
                          <li><a href="blog-single-facebook-comments.html">Blog Single Facebook Comments</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Infinity Scroll</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-extra-infinity-scroll.html">Blog Infinity Scroll Default</a></li>
                          <li><a href="blog-extra-infinity-scroll-lazyload.html">Blog Infinity Scroll Lazyload</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Timeline</a>
                        <ul class="dropdown dropdown-left">
                          <li><a href="blog-timeline.html">Blog Timeline Default</a></li>
                          <li><a href="blog-timeline-masonry.html">Blog Timeline Masonry</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Mega Menu</a>
                    <div class="megamenu megamenu-bg-img">
                      <div class="megamenu-row">
                        <div class="col3">
                          <h4 class="megamenu-col-title">Latest News:</h4>
                          <div class="widget">
                            <div class="latest-posts">
                              <article class="post media-post clearfix pb-0 mb-10">
                                <a href="blog-single-right-sidebar.html" class="post-thumb"><img alt="" src="http://placehold.it/80x55" /></a>
                                <div class="post-right">
                                  <h5 class="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Post Title Here</a></h5>
                                  <p class="post-date mb-0 font-12">Mar 08, 2015</p>
                                </div>
                              </article>
                              <article class="post media-post clearfix pb-0 mb-10">
                                <a href="blog-single-right-sidebar.html" class="post-thumb"><img alt="" src="http://placehold.it/80x55" /></a>
                                <div class="post-right">
                                  <h5 class="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Industrial Coatings</a></h5>
                                  <p class="post-date mb-0 font-12">Mar 08, 2015</p>
                                </div>
                              </article>
                              <article class="post media-post clearfix pb-0 mb-10">
                                <a href="blog-single-right-sidebar.html" class="post-thumb"><img alt="" src="http://placehold.it/80x55" /></a>
                                <div class="post-right">
                                  <h5 class="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Storefront Installations</a></h5>
                                  <p class="post-date mb-0 font-12">Mar 08, 2015</p>
                                </div>
                              </article>
                              <article class="post media-post clearfix pb-0 mb-10">
                                <a href="blog-single-right-sidebar.html" class="post-thumb"><img alt="" src="http://placehold.it/80x55" /></a>
                                <div class="post-right">
                                  <h5 class="post-title mt-0 mb-5"><a href="blog-single-right-sidebar.html">Industrial Coatings</a></h5>
                                  <p class="post-date mb-0 font-12">Mar 08, 2015</p>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                        <div class="col3">
                          <h4 class="megamenu-col-title"><strong>Featured News:</strong></h4>
                          <article class="post clearfix">
                            <div class="entry-header">
                              <div class="post-thumb"> <img class="img-responsive" src="assets/images/blog/1.jpg" alt="" /> </div>
                            </div>
                            <div class="entry-content">
                              <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna et sed aliqua</p>
                              <a class="btn btn-dark btn-theme-colored" href="#">read more..</a> </div>
                          </article>
                        </div>
                        <div class="col3">
                          <h4 class="megamenu-col-title">Promotional Offer:</h4>
                          <img src="images/megamenu/megamenu-sale-off.jpg" alt="" />
                        </div>
                        <div class="col3">
                          <h4 class="megamenu-col-title">Quick Links:</h4>
                          <ul class="list-dashed list-icon">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Disclaimer</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Copyright Notice</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)">Shortcodes</a>
                    <div class="megamenu">
                      <div class="megamenu-row">
                        <div class="col3">
                          <ul class="list-unstyled list-dashed">
                            <li><a href="shortcode-accordion.html"><i class="fa fa-list-ul"></i> Accordion</a></li>
                            <li><a href="shortcode-alerts.html"><i class="fa fa-exclamation-circle"></i> Alerts</a></li>
                            <li><a href="shortcode-animations.html"><i class="fa fa-magic"></i> Animations</a></li>
                            <li><a href="shortcode-background-html5-video.html"><i class="fa fa-video-camera"></i> HTML5 Background Video</a></li>
                            <li><a href="shortcode-before-after-slider.html"><i class="fa fa-window-restore"></i> Before/After Slider</a></li>
                            <li><a href="shortcode-blockquotes.html"><i class="fa fa-quote-right"></i> Blockquotes</a></li>
                            <li><a href="shortcode-box-gradient-effect.html"><i class="fa fa-picture-o"></i> Box Gradient Effects</a></li>
                            <li><a href="shortcode-box-hover-effect.html"><i class="fa fa-picture-o"></i> Box Hover Effects</a></li>
                            <li><a href="shortcode-button-groups-and-dropdowns.html"><i class="fa fa-link"></i> Button Groups</a></li>
                            <li><a href="shortcode-button-hover-effect.html"><i class="fa fa-flag-o"></i> Button Hover Effect</a></li>
                            <li><a href="shortcode-buttons.html"><i class="fa fa-external-link"></i> Buttons</a></li>
                            <li><a href="shortcode-call-to-actions.html"><i class="fa fa-plus-square"></i> Call To Actions</a></li>
                            <li><a href="shortcode-charts.html"><i class="fa fa-pie-chart"></i> Charts</a></li>
                            <li><a href="shortcode-columns-grids.html"><i class="fa fa-columns"></i> Columns Grids</a></li>
                            <li><a href="shortcode-divider.html"><i class="fa fa-indent"></i> Divider</a></li>
                            <li><a href="shortcode-dropcaps.html"><i class="fa fa-bold"></i> Dropcaps</a></li>
                            <li><a href="shortcode-datetime-datepicker.html"><i class="fa fa-calendar"></i> Date Picker</a></li>
                          </ul>
                        </div>
                        <div class="col3">
                          <ul class="list-unstyled list-dashed">
                            <li><a href="shortcode-datetime-timepicker.html"><i class="fa fa-calendar"></i> Time Picker</a></li>
                            <li><a href="shortcode-datetime-datetimepicker.html"><i class="fa fa-calendar"></i> Bootstrap Date-Time Picker</a></li>
                            <li><a href="shortcode-datetime-datepair.html"><i class="fa fa-calendar"></i> Date Pair</a></li>
                            <li><a href="shortcode-flickr-feed.html"><i class="fa fa-flickr"></i> Flickr Feed</a></li>
                            <li><a href="shortcode-flipbox.html"><i class="fa fa-square"></i> Flipbox</a></li>
                            <li><a href="shortcode-forms.html"><i class="fa fa-align-justify"></i> Forms</a></li>
                            <li><a href="shortcode-funfacts.html"><i class="fa fa-bell-o"></i> Funfacts</a></li>
                            <li><a href="shortcode-iconbox.html"><i class="fa fa-unsorted"></i> Icon Box</a></li>
                            <li><a href="shortcode-icon-7stroke.html"><i class="fa fa-circle-o"></i> Icons 7stroke</a></li>
                            <li><a href="shortcode-icon-elegant-icons.html"><i class="fa fa-eye-slash"></i> Icons Elegant</a></li>
                            <li><a href="shortcode-icon-flat-color-icons.html"><i class="fa fa-i-cursor"></i> Icons Flat Color</a></li>
                            <li><a href="shortcode-icon-fontawesome.html"><i class="fa fa-fort-awesome"></i> Icons FontAwesome</a></li>
                            <li><a href="shortcode-icon-fontawesome-tutorial.html"><i class="fa fa-fonticons"></i> Icons FontAwesome Tutorial</a></li>
                            <li><a href="shortcode-icon-strokegap.html"><i class="strokegap-icon strokegap-icon-WorldWide"></i> Icons Strokegap</a></li>
                            <li><a href="shortcode-image-box.html"><i class="fa fa-file-image-o"></i> Image Box</a></li>
                            <li><a href="shortcode-instagram.html"><i class="fa fa-instagram"></i> Instagram Feed</a></li>
                          </ul>
                        </div>
                        <div class="col3">
                          <ul class="list-unstyled list-dashed">
                            <li><a href="shortcode-labels-badges.html"><i class="fa fa-check-square-o"></i> Labels Badges</a></li>
                            <li><a href="shortcode-listgroup-panels.html"><i class="fa fa-th-list"></i> Listgroup Panels</a></li>
                            <li><a href="shortcode-lists.html"><i class="fa fa-list"></i> Lists</a></li>
                            <li><a href="shortcode-maps.html"><i class="fa fa-map-o"></i> Maps</a></li>
                            <li><a href="shortcode-media-embed.html"><i class="fa fa-play-circle-o"></i> Media Embed</a></li>
                            <li><a href="shortcode-modal-bootstrap.html"><i class="fa fa-search-plus"></i> Modal</a></li>
                            <li><a href="shortcode-modal-lightbox.html"><i class="fa fa-expand"></i> Lightbox</a></li>
                            <li><a href="shortcode-navigation.html"><i class="fa fa-navicon"></i> Navigation</a></li>
                            <li><a href="shortcode-owl-carousel.html"><i class="fa fa-sliders"></i> Owl Carousel</a></li>
                            <li><a href="shortcode-odometer.html"><i class="fa fa-tachometer"></i> Odometer</a></li>
                            <li><a href="shortcode-pagination.html"><i class="fa fa-arrow-circle-o-right"></i> Pagination</a></li>
                            <li><a href="shortcode-progressbar.html"><i class="fa fa-tasks"></i> Progress Bars</a></li>
                            <li><a href="shortcode-piechart.html"><i class="fa fa-sun-o"></i> Pie Charts</a></li>
                            <li><a href="shortcode-responsive.html"><i class="fa fa-tablet"></i> Responsive</a></li>
                            <li><a href="shortcode-separator.html"><i class="fa fa-minus-square-o"></i> Separator</a></li>
                            <li><a href="shortcode-sitemap.html"><i class="fa fa-sitemap"></i> Sitemap</a></li>
                            <li><a href="shortcode-sliders.html"><i class="fa fa-sliders"></i> Sliders</a></li>
                          </ul>
                        </div>
                        <div class="col3">
                          <ul class="list-unstyled list-dashed">
                            <li><a href="shortcode-smoothscrolling.html"><i class="fa fa-binoculars"></i> Smoothscrolling</a></li>
                            <li><a href="shortcode-styled-icons.html"><i class="fa fa-facebook-square"></i> Styled Icons</a></li>
                            <li><a href="shortcode-subscribe.html"><i class="fa fa-user-plus"></i> Subscribe</a></li>
                            <li><a href="shortcode-tables.html"><i class="fa fa-table"></i> Tables</a></li>
                            <li><a href="shortcode-tabs.html"><i class="fa fa-indent"></i> Tabs</a></li>
                            <li><a href="shortcode-textblock.html"><i class="fa fa-bold"></i> Textblock</a></li>
                            <li><a href="shortcode-thumbnails-carousels.html"><i class="fa fa-sliders"></i> Thumbnails/carousels</a></li>
                            <li><a href="shortcode-title.html"><i class="fa fa-text-height"></i> Title</a></li>
                            <li><a href="shortcode-timer-final-countdown.html"><i class="fa fa-text-height"></i> Timer Final Countdown</a></li>
                            <li><a href="shortcode-timer-flipclock.html"><i class="fa fa-text-height"></i> Timer Flipclock</a></li>
                            <li><a href="shortcode-timer-slick-circular.html"><i class="fa fa-text-height"></i> Timer Slick Circular</a></li>
                            <li><a href="shortcode-twitter.html"><i class="fa fa-twitter-square"></i> Twitter Feed</a></li>
                            <li><a href="shortcode-typography.html"><i class="fa fa-font"></i> Typography</a></li>
                            <li><a href="shortcode-vertical-timeline.html"><i class="fa fa-arrows-v"></i> Vertical Timeline</a></li>
                            <li><a href="shortcode-widgets.html"><i class="fa fa-gift"></i> Widgets</a></li>
                            <li><a href="shortcode-working-process.html"><i class="fa fa-exchange"></i> Working Process</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header> */}

        {/* <!-- Start main-content --> */}
        
        
       
        <div class="main-content">
          {/* <!-- Section: home --> */}
          <Home></Home>
          {/* <!-- Section: home-boxes --> */}
          <Container></Container>

          {/* <!-- Section: about --> */}
          <About></About>

          {/* <!-- Appontment Form Starts --> */}
          {/* <AppointmentForm></AppointmentForm> */}
          {/* <!-- Appontment Form Ends --> */}
          <Services></Services>
          {/* <!-- Section: Services -->  */}
          <Departments></Departments>
          {/* <!-- Section: Depertment --> */}
          <Pricing></Pricing>
          {/* <!-- Section: Pricing --> */}

          <FunFacts></FunFacts>
          {/* <!--start funfact Section--> */}
        
          <Doctor></Doctor>
          {/* <!-- start Doctors Section:--> */}

          {/* <!-- Section: Call To Action --> */}
          <Gallary></Gallary>
          {/* <!--start gallary Section--> */}

          {/* <!--start testimonial Section--> */}
          <Testimonial></Testimonial>
          {/* <!-- Section: Blog --> */}
          {/* <Blog></Blog> */}
          {/* <!-- Divider: Clients --> */}

        </div>
        {/* <!-- end main-content --> */}
          <Footer></Footer>
        {/* <!-- Footer --> */}

        <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
      </div>
    
  )
}

export default App;

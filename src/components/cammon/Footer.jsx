import React from 'react';
import Link from "next/link";



function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top top-border d-flex align-items-center justify-content-between flex-wrap">
                    <div className="footer-left widget-newsletter d-md-flex align-items-center">
                        <div className="widget-newsletter-info">
                            <h5 className="widget-newsletter-title text-uppercase m-b-1">subscribe newsletter</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information on Events, Sales
                                and Offers.</p>
                        </div>
                        <form action="#">
                            <div className="footer-submit-wrapper d-flex">
                                <input type="email" className="form-control" placeholder="Email address..." size="40"
                                    required />
                                <button type="submit" className="btn btn-dark btn-sm">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer-right">
                        <div className="social-icons">
                            <Link href="#" className="social-icon social-facebook icon-facebook" ></Link>
                            <Link href="#" className="social-icon social-twitter icon-twitter" ></Link>
                            <Link href="#" className="social-icon social-instagram icon-instagram"></Link>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-6 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="contact-widget">
                                            <h4 className="widget-title">ADDRESS:</h4>
                                            <Link href="#">1234 Street Name, City, England</Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 pl-xl-0">
                                        <div className="contact-widget">
                                            <h4 className="widget-title">PHONE:</h4>
                                            <Link href="#">(123) 456-7890</Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="contact-widget email">
                                            <h4 className="widget-title">EMAIL:</h4>
                                            <Link href="mailto:mail@example.com">mail@example.com</Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 pl-xl-0">
                                        <div className="contact-widget">
                                            <h4 className="widget-title">WORKING DAYS/HOURS:</h4>
                                            <Link href="#">Mon - Sun / 9:00 AM - 8:00 PM</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <div className="links link-parts row">
                                    <ul className="link-part col-xl-4 mb-0">
                                        <li><Link href="/pages/about-us">About Us</Link></li>
                                        <li><Link href="/pages/contact-us">Contact Us</Link></li>
                                        <li><Link href="/pages/account">My Account</Link></li>
                                    </ul>
                                    <ul className="link-part col-xl-8">
                                        <li className="pl-xl-2 ml-xl-1"><Link href="#">Orders History</Link></li>
                                        <li className="pl-xl-2 ml-xl-1"><Link href="#">Advanced search</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-4">
                            <div className="widget">
                                <h4 className="widget-title">Main Features</h4>
                                <div className="links link-parts row">
                                    <ul className="link-part col-xl-6 mb-0">
                                        <li><Link href="#">Super Fast React Template</Link></li>
                                        <li><Link href="#">1st Fully working Ajax Theme</Link></li>
                                        <li><Link href="#">33 Unique Shop Layouts</Link></li>
                                    </ul>
                                    <ul className="link-part col-xl-6 pl-xl-2">
                                        <li><Link href="#">Powerful Admin Panel</Link></li>
                                        <li><Link href="#">Mobile &amp; Retina Optimized</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">Porto eCommerce. © 2021. All Rights Reserved</span>
                    </div>

                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons">
                            <span className="payment-icon visa" style={ { backgroundImage: `url("images/payments/payment-visa.svg")` } }></span>
                            <span className="payment-icon paypal" style={ { backgroundImage: `url("images/payments/payment-paypal.svg")` } }></span>
                            <span className="payment-icon stripe" style={ { backgroundImage: `url("images/payments/payment-stripe.png")` } }></span>
                            <span className="payment-icon verisign" style={ { backgroundImage: `url("images/payments/payment-verisign.svg")` } }></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );
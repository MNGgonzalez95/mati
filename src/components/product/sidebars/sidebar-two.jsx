import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import { LazyLoadImage } from 'react-lazy-load-image-component';



function ProductSidebarTwo(props) {


    function sidebarToggle(e) {
        let body = document.querySelector('body');

        e.preventDefault();
        if (body.classList.contains('sidebar-opened')) {
            body.classList.remove('sidebar-opened');
        } else {
            body.classList.add('sidebar-opened');
        }
    }

    function closeSidebar() {
        document.querySelector('body').classList.contains('sidebar-opened') && document.querySelector('body').classList.remove('sidebar-opened');
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <div className="sidebar-toggle custom-sidebar-toggle" onClick={e => sidebarToggle(e)}><i className="fas fa-sliders-h"></i></div>
            <aside className={`sidebar-product col-lg-3 mobile-sidebar `}>
                <StickyBox className="sticky-wrapper sticky-sidebar" offsetTop={70}>

                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        <i className="icon-shipped"></i>
                                        <h4>FREE<br />SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i className="icon-us-dollar"></i>
                                        <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i className="icon-online-support"></i>
                                        <h4>ONLINE<br />SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div>



                            <div className="widget">
                                <div className="maga-sale-container custom-maga-sale-container">
                                    <figure className="mega-image">
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/banners/banner-sidebar.jpg"
                                            threshold={500}
                                            effect="blur"
                                            width={100}
                                            height={355}
                                        />
                                    </figure>

                                    <div className="mega-content">
                                        <div className="mega-price-box">
                                            <span className="price-big">50</span>
                                            <span className="price-desc"><em>%</em>OFF</span>
                                        </div>

                                        <div className="mega-desc">
                                            <h3 className="mega-title mb-0">MEGA SALE</h3>
                                            <span className="mega-subtitle">MANY ITEM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </StickyBox>
            </aside>
        </>
    )
}

export default (ProductSidebarTwo);
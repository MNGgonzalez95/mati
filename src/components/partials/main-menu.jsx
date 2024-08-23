import Link from "next/link";

function MainMenu({ router }) {
    const pathname = '/';

    return (
        <>
            <nav className="main-nav w-100">
                <ul className="menu sf-js-enabled sf-arrows">
                    <li className={pathname.startsWith('/shop') ? 'active' : ''}>
                        <Link href="/" className="sf-with-ul">Categories</Link>
                       
                        <div className="megamenu megamenu-fixed-width megamenu-3cols">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Link href="#" className="nolink">VARIATION 1</Link>
                                    <ul className="submenu">
                                        <li><a href="/react/porto/demo3/shop/full-width">Fullwidth Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop/boxed-slider">Boxed Slider Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop/boxed-image">Boxed Image Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop">Left Sidebar</a></li>
                                        <li><a href="/react/porto/demo3/shop/right-sidebar">Right Sidebar</a></li>
                                        <li><a href="/react/porto/demo3/shop/off-canvas">Off-Canvas Filter</a></li>
                                        <li><a href="/react/porto/demo3/shop/horizontal-filter-1">Horizontal Filter1</a></li>
                                        <li><a href="/react/porto/demo3/shop/horizontal-filter-2">Horizontal Filter2</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <Link href="#" className="nolink">VARIATION 2</Link>
                                    <ul className="submenu">
                                        <li><a href="/react/porto/demo3/shop/full-width">Fullwidth Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop/boxed-slider">Boxed Slider Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop/boxed-image">Boxed Image Banner</a></li>
                                        <li><a href="/react/porto/demo3/shop">Left Sidebar</a></li>
                                        <li><a href="/react/porto/demo3/shop/right-sidebar">Right Sidebar</a></li>
                                        <li><a href="/react/porto/demo3/shop/off-canvas">Off-Canvas Filter</a></li>
                                        <li><a href="/react/porto/demo3/shop/horizontal-filter-1">Horizontal Filter1</a></li>
                                        <li><a href="/react/porto/demo3/shop/horizontal-filter-2">Horizontal Filter2</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src="images/menu-banner-1.jpg" alt="Menu banner" width="380" height="790" className="product-promo" />
                                        </figure>
                                        <i>OFF</i>
                                        <div className="banner-content">
                                            <h4>
                                                <span className="">UP TO</span><br />
                                                <b className="">50%</b>
                                            </h4>
                                        </div>
                                        <Link href="/shop" className="btn btn-sm btn-dark">SHOP NOW</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li className={pathname.startsWith('/product') ? 'active' : ''}>
                        <Link href="/product" className="sf-with-ul">PRODUCTS</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default MainMenu;

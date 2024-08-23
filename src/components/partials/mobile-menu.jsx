'use client';
import Link from "next/link";


function MobileMenu ( { router } ) {
const pathname = '/'


    function isOtherPage () {
        return 0;
    }

    function closeMobileMenu () {
        document.querySelector( "body" ).classList.remove( "mmenu-active" );

        if ( document.querySelector( ".menu-toggler" ) ) {
            document.querySelector( ".menu-toggler" ).classList.remove( "active" );
        }
    }

    function searchProducts ( e ) {
        e.preventDefault();

    }

    function onChangeSearchText ( e ) {
    }

    return (
        <>
            <div className="mobile-menu-overlay" onClick={ closeMobileMenu }></div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close" onClick={ closeMobileMenu }><i className="fa fa-times"></i></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className={ pathname === '/' ? 'active' : '' }>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={ pathname.startsWith( '/shop' ) ? 'active' : '' }>
                                {

                                }
                            </li>



                            <li className={ isOtherPage() ? 'active' : '' }>

                            </li>

                            <li><Link href="/pages/blog">Blog</Link></li>
                            <li><Link href="/pages/about-us">About Us</Link></li>
                        </ul>

                        <ul className="mobile-menu mt-2 mb-2">
                            <li className="border-0"><Link href="#">Special Offer!</Link></li>
                            <li className="border-0"><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!<span className="tip tip-hot">Hot</span></a></li>
                        </ul>

                        <ul className="mobile-menu">
                            <li><Link href="/pages/account">My Account</Link></li>
                            <li><Link href="/pages/contact-us">Contact Us</Link></li>
                            <li><Link href="/pages/blog">Blog</Link></li>
                            <li><Link href="/pages/wishlist">My Wishlist</Link></li>
                            <li><Link href="/pages/cart">Cart</Link></li>
                            <li><Link href="/pages/login" className="login-link">Log In</Link></li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#" onSubmit={ searchProducts }>
                        <input type="text" className="form-control mb-0" placeholder="Search..." required onChange={ onChangeSearchText } />
                        <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
                    </form>

                    <div className="social-icons">
                        <Link href="#" className="social-icon social-facebook icon-facebook" >
                        </Link>
                        <Link href="#" className="social-icon social-twitter icon-twitter">
                        </Link>
                        <Link href="#" className="social-icon social-instagram icon-instagram">
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ( MobileMenu );
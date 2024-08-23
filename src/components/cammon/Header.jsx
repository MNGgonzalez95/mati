"use client"
import Link from "next/link";
import Image from "next/image";
import {usePathname} from 'next/navigation';
import SearchForm from "../partials/search-form";
import CartMenu from "../partials/cart-menu";
import MainMenu from "../partials/main-menu";


function Header({adClass = ''}) {
    const pathname = usePathname();

    function openMobileMenu(e) {
        e.preventDefault();
        document.querySelector("body").classList.toggle("mmenu-active");
        e.currentTarget.classList.toggle("active");
    }

    return (
        <header className={`header ${pathname === '/' ? 'header-transparent' : ''} ${adClass}`}>
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler" type="button" onClick={openMobileMenu}>
                            <i className="fas fa-bars"></i>
                        </button>

                        <Link href="/" className="logo" style={{maxWidth:200}}  >
                            <Image src="/images/logo_foodies_new-02.svg" alt="logo" width={501} height={200}/>

                        </Link>

                        <MainMenu/>
                    </div>

                    <div className="header-right ">

                        <SearchForm/>

                        <Link href="/pages/login" className="header-icon header-icon-user"><i
                            className="icon-user-2"></i></Link>


                        <CartMenu/>
                    </div>

                </div>
            </div>
        </header>
    )

}

export default Header;
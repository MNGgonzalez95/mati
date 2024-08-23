'use client';

import {Inter} from "next/font/google";
import {UserProvider} from "@/context/User";

import 'react-toastify/dist/ReactToastify.min.css';
import 'rc-tree/assets/index.css';
import Header from "../components/cammon/Header";
import Footer from "../components/cammon/Footer";
import '../../public/vendor/bootstrap.min.css';
import '../../public/vendor/bootstrap.min.css';
import '../../public/vendor/fontawesome-free/css/all.min.css';
import "../../public/sass/style.scss";
import Script from "next/script";
import MobileMenu from "../components/partials/main-menu";
import StickyNavbar from "../components/partials/sticky-navbar";
import {scrollTopHandlder, scrollTopInit, stickyInit} from "@/utils";
import {useEffect} from "react";
import { ProductProvider } from "@/context/ProductContext";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}) {
    useEffect(() => {
        window.addEventListener("scroll", stickyInit, { passive: true });
        window.addEventListener("scroll", scrollTopInit, { passive: true });
        window.addEventListener("resize", stickyInit);


        return () => {
            window.removeEventListener("scroll", stickyInit, { passive: true });
            window.removeEventListener("scroll", scrollTopInit, { passive: true });
            window.removeEventListener("resize", stickyInit);
        }
    }, [])

    return (


        <html lang="en">
        <head>
            <Script src="/js/jquery.min.js" async="" strategy="beforeInteractive"/>
            <title>Infobae-Shop</title>
        </head>
        <body className={inter.className}>
        <div className="page-wrapper">
            <UserProvider>
            <ProductProvider>           
                <Header/>
                <div>
                    {children}
                </div>
                <Footer/>
                </ProductProvider>
            </UserProvider>
                <div className="wishlist-popup"><div className="wishlist-popup-msg">Product added!</div></div>
                <MobileMenu />
            <StickyNavbar />
            <a id="scroll-top" href="#" title="Top" role="button" className="btn-scroll" onClick={scrollTopHandlder}><i className="icon-angle-up"></i></a>
        </div>
        </body>
        </html>
);
}

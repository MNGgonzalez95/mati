import React, { useEffect } from 'react';
import Link from "next/link";





function CartMenu(props) {
    const { cartItems } = props;

    useEffect(() => {


        return () => {
        }
    }, [])

    function toggleCart(e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('cart-opened');
    }

    function cartClose() {
        document.querySelector('body').classList.contains('cart-opened') && document.querySelector('body').classList.remove('cart-opened');
    }

    function getQtyTotal(items) {


        return 0;
    }

    function removeFromCart(e, cart) {
        e.preventDefault();
        props.removeFromCart(cart);
    }

    return (
        <div className="dropdown cart-dropdown">
            <a href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" onClick={toggleCart}>
                <i className="icon-cart-thick"></i>
                <span className="cart-count badge-circle">{getQtyTotal(cartItems)}</span>
            </a>

            <div className="cart-overlay" onClick={cartClose}></div>

            <div className="dropdown-menu mobile-cart">
                <a href="#" title="Close (Esc)" className="btn-close" onClick={e => { cartClose(); e.preventDefault(); }}>×</a>

                <div className="dropdownmenu-wrapper">
                    <div className="dropdown-cart-header">Shopping Cart</div>

                    {
                        0 > 0 ?
                            <>
                                <div className="dropdown-cart-products">
                                    {
                                        cartItems.map((cart, index) => (
                                            <div className="product" key={"cartItems" + index}>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        {
                                                            cart.index > -1 ?
                                                                !cart.variants[cart.index].color ?
                                                                    <Link href={`/product/default/${cart.slug}`}>{cart.name + ' - ' + cart.variants[cart.index].size.name}</Link>
                                                                    :
                                                                    !cart.variants[cart.index].size ?
                                                                        <Link href={`/product/default/${cart.slug}`}>{cart.name + ' - ' + cart.variants[cart.index].color.name}</Link>
                                                                        :
                                                                        <Link href={`/product/default/${cart.slug}`}>{cart.name + ' - ' + cart.variants[cart.index].color.name + ', ' + cart.variants[cart.index].size.name}</Link>
                                                                :
                                                                <Link href={`/product/default/${cart.slug}`}>{cart.name}</Link>
                                                        }
                                                    </h2>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">{cart.qty}</span> × ${cart.price.toFixed(2)}
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <Link href={`/product/default/${cart.slug}`} className="product-image">
                                                        <img src={process.env.NEXT_PUBLIC_ASSET_URI + cart.small_pictures[0].url} width="78" height="78" alt="product" />
                                                    </Link>
                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={e => { removeFromCart(e, cart); }}></a>
                                                </figure>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>SUBTOTAL:</span>

                                    <span className="cart-total-price float-right">${getCartTotal(cartItems).toFixed(2)}</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <Link href="/pages/cart" className="btn btn-gray btn-block view-cart">View Cart</Link>
                                    <Link href="/pages/checkout" className="btn btn-dark btn-block text-white">Checkout</Link>
                                </div>
                            </>
                            :
                            <p className="pt-3 mt-2">No products in the cart.</p>
                    }
                </div>
            </div>
        </div >
    );
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartlist.cart ? state.cartlist.cart : []
    }
}

export default (CartMenu);
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from "next/link";



function CartPopup(props) {
    const { product } = props;

    return (
        <div className="minipopup-area">
            <div className="minipopup-box" style={{ top: "0" }}>
                <div className="product media-with-lazy">
                    <figure className="product-media w-100">
                        <Link href={`/product/default/${product.slug}`} >
                            <LazyLoadImage
                                alt="product"
                                src={product.small_pictures ? `${process.env.NEXT_PUBLIC_ASSET_URI + product.small_pictures[0].url}` : ''}
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </Link>
                    </figure>
                    <div className="product-detail">
                        {
                            product.index > -1 ?
                                !product.variants[product.index].color ?
                                    <Link className="product-name" href={`/product/default/${product.slug}`}>{product.name + ' - ' + product.variants[product.index].size.name}</Link>
                                    :
                                    !product.variants[product.index].size ?
                                        <Link className="product-name" href={`/product/default/${product.slug}`}>{product.name + ' - ' + product.variants[product.index].color.name}</Link>
                                        :
                                        <Link className="product-name" href={`/product/default/${product.slug}`}>{product.name + ' - ' + product.variants[product.index].color.name + ', ' + product.variants[product.index].size.name}</Link>
                                :
                                <Link className="product-name" href={`/product/default/${product.slug}`}>{product.name}</Link>
                        }

                        <p>has been added to your cart.</p>
                    </div>
                </div>
                <div className="product-action">
                    <Link href="/pages/cart" className="btn viewcart">View Cart</Link>
                    <Link href="/pages/checkout" className="btn btn-dark checkout">Checkout</Link>
                </div>
                <button className="mfp-close"></button>
            </div>
        </div>
    )
}

export default React.memo(CartPopup);
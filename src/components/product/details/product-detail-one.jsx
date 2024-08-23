import SlideToggle from 'react-slide-toggle';
import React, { useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import Qty from '../qty';
import { ProductContext } from '../../../context/ProductContext';

const ProductDetailOne = () => {
    const { getProductById } = useContext(ProductContext);
    const product = getProductById(1);

    const [attrs, setAttrs] = useState({
        sizes: [{ size: 'M' }, { size: 'L' }],
        colors: [{ name: 'Red', color: '#ff0000' }, { name: 'Blue', color: '#0000ff' }]
    });
    const [variant, setVariant] = useState(null);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [qty, setQty] = useState(1);

    function isInWishlist() {
        return false;
    }

    function onWishlistClick(e) {
        e.preventDefault();
        alert('Add to Wishlist');
    }

    function onAddCartClick(e) {
        e.preventDefault();
        alert('Add to Cart');
    }

    function changeQty(value) {
        setQty(value);
    }

    function selectColor(name, e) {
        e.preventDefault();
        setColor(color !== name ? name : null);
    }

    function selectSize(name, e) {
        e.preventDefault();
        setSize(size !== name ? name : null);
    }

    function clearVariation(e) {
        e.preventDefault();
        setSize(null);
        setColor(null);
        setQty(1);
    }

    if (!product) return <div>Cargando...</div>;

    return (
        <>
            <div className={`skel-pro skel-detail col-lg-7 col-md-6`}></div>
            {
                product &&
                <div className={`product-single-details col-lg-7 col-md-6`}>
                    <h1 className="product-title">{product.name}</h1>

                    <div className="ratings-container">
                        <Link href="#" className="rating-link">
                            ( {product.reviews > 0 ? `${product.reviews} Reviews` : 'There are no reviews yet.'} )
                        </Link>
                    </div>

                    <hr className="short-divider" />

                    <div className="price-box">
                        {
                            product.price[0] === product.price[1] ?
                                <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                                    <span className="new-price">{'$' + product.price[0].toFixed(2)}</span>
                                </>
                        }
                    </div>

                    <div className="product-desc">
                        <p>{product.short_description}</p>
                    </div>

                    <ul className="single-info-list">
                        {
                            product.sku &&
                                <li>
                                    SKU: <strong>{product.sku}</strong>
                                </li>
                        }

                        <li>
                            CATEGORY: {product.categories.map((item, index) => (
                                <React.Fragment key={`single-cat-${index}`}>
                                    <strong>
                                        <Link href={{ pathname: '/shop', query: { category: item.slug } }} className="category">{item.name}</Link>
                                    </strong>
                                    {index < product.categories.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            ))}
                        </li>

                        {
                            product.tags && product.tags.length > 0 &&
                                <li>
                                    TAGs: {product.tags.map((item, index) => (
                                        <React.Fragment key={`single-tag-${index}`}>
                                            <strong>
                                                <Link href={{ pathname: '/shop', query: { atributto: item.value } }} className="category">{item.name}</Link>
                                            </strong>
                                            {index < product.tags.length - 1 ? ', ' : ''}
                                        </React.Fragment>
                                    ))}
                                </li>
                        }
                    </ul>

                    {
                        product.variants.length > 0 &&
                            <div className="product-filters-container">
                                {
                                    attrs.colors.length > 0 &&
                                        <div className="product-single-filter d-flex align-items-center">
                                            <label>Color:</label>
                                            <ul className="config-size-list config-color-list config-filter-list">
                                                {
                                                    attrs.colors.map((item, index) => (
                                                        <li key={`filter-color-${index}`} className={`${item.name === color ? 'active' : ''}`}>
                                                            {
                                                                item.thumb ?
                                                                    <a href="#" className="filter-thumb p-0" onClick={(e) => selectColor(item.name, e)}>
                                                                        <LazyLoadImage
                                                                            src={item.thumb.url}
                                                                            alt='product thumb'
                                                                            width={item.thumb.width}
                                                                            height={item.thumb.height}
                                                                        />
                                                                    </a>
                                                                    :
                                                                    <a href="#" className="filter-color border-0"
                                                                        style={{ backgroundColor: item.color }} onClick={(e) => selectColor(item.name, e)}></a>
                                                            }</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                }

                                {
                                    attrs.sizes.length > 0 &&
                                        <div className="product-single-filter d-flex align-items-center">
                                            <label>Size:</label>
                                            <ul className="config-size-list d-inline-block">
                                                {
                                                    attrs.sizes.map((item, index) => (
                                                        <li key={`filter-size-${index}`} className={`${item.size === size ? 'active' : ''}`}>
                                                            {
                                                                item.thumb ?
                                                                    <a href="#" className="filter-thumb p-0" onClick={(e) => selectSize(item.size, e)}>
                                                                        <LazyLoadImage
                                                                            src={item.thumb.url}
                                                                            alt='product thumb'
                                                                            width={item.thumb.width}
                                                                            height={item.thumb.height}
                                                                        />
                                                                    </a>
                                                                    :
                                                                    <a href="#" className="d-flex align-items-center justify-content-center" onClick={(e) => selectSize(item.size, e)}>{item.size}</a>
                                                            }
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                }

                                <SlideToggle collapsed={true}>
                                    {({ onToggle, setCollapsibleElement, toggleState }) => (
                                        <>
                                            <button className={`d-none variation-toggle ${toggleState.toLowerCase()}`} onClick={onToggle}></button>
                                            <div className="product-single-filter m-0" ref={setCollapsibleElement}>
                                                <label></label>
                                                <a className="font1 text-uppercase clear-btn" href="#" onClick={clearVariation}>Clear</a>
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                            </div>
                    }

                    <div className="product-action">
                        {
                            product.variants.length > 0 &&
                                <SlideToggle collapsed={true}>
                                    {({ onToggle, setCollapsibleElement, toggleState }) => (
                                        <>
                                            <button className={`d-none price-toggle ${toggleState.toLowerCase()}`} onClick={onToggle}></button>
                                            <div className="price-box product-filtered-price m-0" ref={setCollapsibleElement}>
                                                {
                                                    variant && variant.id >= 0 && (variant.price ? variant.sale_price ?
                                                        <>
                                                            <del className="old-price"><span>${variant.price.toFixed(2)}</span></del>
                                                            <span className="product-price">${variant.sale_price.toFixed(2)}</span>
                                                        </>
                                                        : <span className="product-price">${variant.price.toFixed(2)}</span>
                                                        : <span className="product-stock pb-3 d-block">{product.is_out_of_stock ? 'Out of Stock' : `${product.stock} in stock`}</span>)
                                                }
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                        }

                        <Qty max={product.stock} value={qty} onChangeQty={changeQty} />

                        <a href="#" className={`btn btn-dark add-cart shopping-cart mr-2 ${attrs.sizes.length > 0 || attrs.colors.length > 0 ? 'disabled' : ''}`} title="Add To Cart" onClick={onAddCartClick}>Add to Cart</a>
                    </div>

                    <hr className="divider mb-0 mt-0" />

                    <div className="product-single-share mb-3">
                        <label className="sr-only">Share:</label>
                        <a href="#" className={`btn-icon-wish add-wishlist ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-wishlist-2"></i><span>{isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}</span></a>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDetailOne;

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductOne(props) {
    const { adClass = "", link = "default", product } = props;

    // Verifica si wishlist está definido y es un array antes de usar findIndex
    function isInWishlist() {
        return Array.isArray(props.wishlist) && product
            ? props.wishlist.findIndex(item => item.slug === product.slug) > -1
            : false;
    }

    function isSale() {
        return product.price[0] !== product.price[1] && product.variants.length === 0
            ? '-' + (100 * (product.price[1] - product.price[0]) / product.price[1]).toFixed(0) + '%'
            : product.variants.find(variant => variant.sale_price) ? "Sale" : false;
    }

    function onWishlistClick(e) {
        e.preventDefault();
        if (!isInWishlist()) {
            let target = e.currentTarget;
            target.classList.add("load-more-overlay");
            target.classList.add("loading");

            setTimeout(() => {
                target.classList.remove('load-more-overlay');
                target.classList.remove('loading');
                props.addToWishList(product);
            }, 1000);
        } else {
            router.push('/pages/wishlist');
        }
    }

    function onAddCartClick(e) {
        e.preventDefault();
        props.addToCart(product);
    }

    function onQuickViewClick(e) {
        e.preventDefault();
        props.showQuickView(product.slug);
    }

    return (
        <div className={`product-default inner-quickview inner-icon media-with-lazy ${adClass}`}>
            <figure>
                <a href={`/product/${link}/${product.slug}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ product.images[0].url}
                        threshold={500}
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.images.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ product.images[1].url}
                                threshold={500}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </a>

                <div className="label-group">
                    {product.is_hot ? <div className="product-label label-hot">HOT</div> : ''}

                    {isSale() ? <div className="product-label label-sale">{isSale()}</div> : ''}
                </div>

                <div className="btn-icon-group">
                    {
                        product.variants.length > 0 ?
                            <a href={`/product/default/${product.slug}`} className="btn-icon btn-add-cart"><i
                                className="fa fa-arrow-right"></i></a>
                            : <a href="#" className="btn-icon btn-add-cart product-type-simple" title="Add To Cart" onClick={onAddCartClick}><i
                                className="icon-shopping-cart"></i></a>
                    }
                </div>

                {
                    product.until && product.until !== null &&
                    <CountDown product={product} />
                }

                <a href="#" className="btn-quickview" title="Quick View" onClick={onQuickViewClick}>Quick View</a>
            </figure>

            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.categories ?
                                product.categories.map((item, index) => (
                                    <React.Fragment key={item.slug + '-' + index}>
                                        <a href={`/shop?slug=${item.slug}`}>{item.name}</a>
                                        {index < product.categories.length - 1 ? ', ' : ""}
                                    </React.Fragment>
                                )) : ""
                        }
                    </div>

                    <a href="#" className={`btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-heart"></i></a>
                </div>

                <h3 className="product-title">
                    <a href={`/product/default/${product.slug}`}>{product.name}</a>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.ratings.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        product.price[0] === product.price[1] ?
                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                                    <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                </>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        wishlist: Array.isArray(state.wishlist.list) ? state.wishlist.list : [] 
    };
};

export default ProductOne;

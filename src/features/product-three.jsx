import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import productData from '../helper/pueba.json';

export default function ProductThree(props) {
    const { adClass = "", link = "default", productId } = props;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            const foundProduct = Object.values(productData.specialProducts)
                .flat()
                .find(prod => prod.id === productId);

            if (foundProduct) {
                setProduct(foundProduct);
            }
            setLoading(false);
        };

        loadProduct();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const getImageUrl = (image) => {
        return image && image.url ? image.url : '/path/to/default-image.jpg';
    };

    return (
        <div className={`product-default media-with-lazy left-details product-widget ${adClass}`}>
            <figure>
                <Link href={`/product/${link}/${product.slug}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={getImageUrl(product.small_pictures[0])}
                        threshold={500}
                        effect="black and white"
                        width={84}
                    />
                    {product.small_pictures.length >= 2 && (
                        <LazyLoadImage
                            alt="product"
                            src={getImageUrl(product.small_pictures[1])}
                            threshold={500}
                            effect="black and white"
                            wrapperClassName="product-image-hover"
                        />
                    )}
                </Link>
            </figure>

            <div className="product-details">
                <h3 className="product-title">
                    <Link href={`/product/${link}/${product.slug}`}>
                        {product.name}
                    </Link>
                </h3>

                <div className="ratings-details">
                <h3 className="product-title">
                    <Link href={`/product/${link}/${product.description}`}>
                        {product.description}
                    </Link>
                </h3>
                </div>

                <div className="price-box">
                    {product.price[0] === product.price[1] ? (
                        <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                    ) : product.variants.length > 0 ? (
                        <span className="product-price">
                            {'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}
                        </span>
                    ) : (
                        <>
                            <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

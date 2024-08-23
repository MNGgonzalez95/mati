"use client";

import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '@/context/ProductContext';
import Link from 'next/link';
import FeatureBoxSection from '@/components/home/featurebox-section';
import ProductSidebarTwo from '@/components/product/sidebars/sidebar-two';
import SingleTabOne from '@/components/tabs/single-tab-one';
import QuickModal from '@/components/features/modals/quickview';
import ProductDetailOne from '@/components/product/details/product-detail-one';
import ProductMediaOne from '@/components/product/media/product-media-one';
import RelatedProducts from '@/components/product/widgets/related-products';
import ProductWidgetContainer from '@/components/product/widgets/product-widget-container';

function Mati() {
    const { getProductById } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = getProductById(1); // Cambia el ID si necesitas otro producto
                if (productData) {
                    setProduct(productData);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [getProductById]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <main className="main product-page">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
                            <li className="breadcrumb-item">
                                {product && product.categories.map((item, index) => (
                                    <React.Fragment key={`category-${index}`}>
                                        <Link href={{ pathname: "/shop", query: { slug: item.slug } }}>{item.name}</Link>
                                        {index < product.categories.length - 1 ? ',' : ''}
                                    </React.Fragment>
                                ))}
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {product && product.name}
                            </li>
                        </ol>
                    </div>
                </nav>
                <div className={`container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                    <div className="row">
                        <div className="col-lg-9 main-content pb-2">
                            <div className="product-single-container product-single-default">
                                <div className="row">
                                    <ProductMediaOne />
                                    <ProductDetailOne product={product} />
                                </div>
                                {/* <QuickModal /> */}
                            </div>
                        </div>
                        {/* <ProductSidebarTwo />
                        <SingleTabOne product={product} /> */}
                    </div>

                    <hr className="mt-3 mb-6" />
                    <div>
                        {/* <RelatedProducts product={product} />
                        <ProductWidgetContainer />
                        <FeatureBoxSection /> */}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Mati;

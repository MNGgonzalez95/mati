import React, { useEffect, useState } from 'react';
import ProductThree from '../../../features/product-three';
import product from '../../../helper/pueba.json'; 

function ProductWidgetContainer(props) {
    const { adClass = "" } = props;
    const [loading, setLoading] = useState(true);
    const [featured, setFeatured] = useState([]);
    const [bestSelling, setBestSelling] = useState([]);
    const [latest, setLatest] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const { featured, bestSelling, latest, topRated } = product.specialProducts;
            setFeatured(featured.slice(0, 3));
            setBestSelling(bestSelling.slice(0, 3));
            setLatest(latest.slice(0, 3));
         
            setLoading(false);
        }, 1000); 
    }, []);

    return (
        <section className={`product-widgets-container pb-2 skeleton-body skel-shop-products ${loading ? '' : 'loaded'} ${adClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {loading ? (
                            [0, 1, 2].map((item, index) => (
                                <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                            ))
                        ) : (
                            <>
                                <h4 className="section-sub-title">Featured Products</h4>
                                {featured.map((product, index) => (
                                    <ProductThree key={product.id} productId={product.id} link="featured" />
                                ))}
                            </>
                        )}
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-5 pb-lg-0">
                        {loading ? (
                            [0, 1, 2].map((item, index) => (
                                <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                            ))
                        ) : (
                            <>
                                <h4 className="section-sub-title">Best Selling Products</h4>
                                {bestSelling.map((product, index) => (
                                    <ProductThree key={product.id} productId={product.id} link="best-selling" />
                                ))}
                            </>
                        )}
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                        {loading ? (
                            [0, 1, 2].map((item, index) => (
                                <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                            ))
                        ) : (
                            <>
                                <h4 className="section-sub-title">Latest Products</h4>
                                {latest.map((product, index) => (
                                    <ProductThree key={product.id} productId={product.id} link="latest" />
                                ))}
                            </>
                        )}
                    </div>

                    <div className="col-lg-3 col-sm-6 pb-0">
                        {loading ? (
                            [0, 1, 2].map((item, index) => (
                                <div className="skel-product-col skel-pro mb-2" key={"ProductThree" + index}></div>
                            ))
                        ) : (
                            <>
                             
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductWidgetContainer;

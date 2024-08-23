import React, { useState, useEffect } from 'react';
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../features/product-one';
import { productSlider } from '../../../utils/data/slider';
import relatedProductsData from '../../../helper/product.json';

function RelatedProducts(props) {
    const { adClass = "", loading, isContainer = false } = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('Datos importados:', relatedProductsData); // Log para verificar los datos
        if (relatedProductsData.product && Array.isArray(relatedProductsData.product.products)) {
            setProducts(relatedProductsData.product.products);
        } else {
            console.error('Datos de productos inválidos:', relatedProductsData.product?.products);
        }
    }, []);

    const sliderOption = { ...productSlider, dots: true, nav: false };

    return (
        <section className={`products-section pt-0 ${adClass}`}>
            <div className={isContainer ? 'container' : ''}>
                <h2 className="section-title">Related Products</h2>
                {
                    loading ?
                        [0, 1, 2, 3].map((item, index) =>
                            <div className="skel-pro skel-pro-grid" key={"product-skel" + index}></div>
                        )
                        :
                        products.length === 0 ?
                            <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                            :
                            <OwlCarousel adClass="products-slider dots-top dots-small" options={sliderOption}>
                                {products.map((item, index) => (
                                    <ProductOne
                                        product={item}
                                        key={"product-one" + index}
                                    />
                                ))}
                            </OwlCarousel>
                }
            </div>
        </section>
    );
}

export default RelatedProducts;

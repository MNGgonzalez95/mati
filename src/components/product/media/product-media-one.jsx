import React, { useState, useEffect, useRef, useContext } from 'react';
import LightBox from 'react-image-lightbox';
import { Magnifier } from 'react-image-magnifiers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OwlCarousel from '../../features/owl-carousel'; 
import { productSingleSlider, prodThumbSlider } from '../../../utils/data/slider';
import { ProductContext } from "../../../context/ProductContext";

export default function ProductMediaOne({ adClass = 'col-lg-5 col-md-6', parent = ".product-single-default" }) {
    const { getProductById } = useContext(ProductContext);
    const product = getProductById(1); 
  console.log("holas".product)
    const [openLB, setOpenLB] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [redraw, setRedraw] = useState(true);
    const mediaRef = useRef(null);

    const events = {
        onTranslate: (e) => {
            const activeDot = document.querySelector(`${parent} .prod-thumbnail .owl-dot.active`);
            if (activeDot) activeDot.classList.remove('active');
            const thumbs = document.querySelectorAll(`${parent} .prod-thumbnail .owl-item`);
            if (thumbs[e.item.index]) {
                thumbs[e.item.index].querySelector('.owl-dot')?.classList.add('active');
            }
        },
        onTranslated: (e) => {
            setPhotoIndex(e.item.index);
        }
    };

    useEffect(() => {
        setOpenLB(false);
        setPhotoIndex(0);
        setRedraw(true);

        if (mediaRef.current && typeof mediaRef.current.goTo === 'function') {
            mediaRef.current.goTo(0);
        }

        const activeDot = document.querySelector(`${parent} .prod-thumbnail .owl-dot.active`);
        if (activeDot) activeDot.classList.remove('active');
        document.querySelector(`${parent} .prod-thumbnail .owl-dot`)?.classList.add('active');
    }, [parent]);

    const openLightBox = () => {
        setOpenLB(true);
        setRedraw(false);
    };

    const closeLightBox = () => {
        setOpenLB(false);
        setRedraw(false);
    };

    const moveNextPhoto = () => {
        setPhotoIndex((photoIndex + 1) % product.images.length);
    };

    const movePrevPhoto = () => {
        setPhotoIndex((photoIndex + product.images.length - 1) % product.images.length);
    };

    const handleThumbnailClick = (index) => {
        setPhotoIndex(index);
        setRedraw(!redraw);
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div className={`product-single-gallery ${adClass}`}>
            <div className="skel-pro skel-magnifier"></div>
            <div className="product-slider-container">
                <OwlCarousel
                    adClass="product-single-carousel owl-carousel owl-theme show-nav-hover"
                    options={productSingleSlider}
                    events={events}
                    onChangeRef={(ref) => (mediaRef.current = ref)}
                    redraw={redraw}
                >
                    {product.images.map((item, index) => (
                        <div className="product-item" key={`product-item-${index}`}>
                            <Magnifier
                                style={{ paddingTop: "100%", position: "relative" }}
                                imageSrc={item.url}
                                imageAlt="product"
                                mouseActivation="hover"
                                cursorStyleActive="crosshair"
                                dragToMove={false}
                                className="product-single-image"
                            />
                        </div>
                    ))}
                </OwlCarousel>
                <span className="prod-full-screen" onClick={openLightBox}>
                    <i className="icon-plus"></i>
                </span>
            </div>

            <OwlCarousel adClass="prod-thumbnail owl-theme owl-dots" options={prodThumbSlider}>
                {product.images.map((item, index) => (
                    <div className="owl-dot media-with-lazy" key={`owl-dot-${index}`} onClick={() => handleThumbnailClick(index)}>
                        <figure className="mb-0">
                            <LazyLoadImage
                                src={item.thumbnailUrl}
                                alt="Thumbnail"
                                width="100%"
                                height="auto"
                                className="d-block"
                            />
                        </figure>
                    </div>
                ))}
            </OwlCarousel>

            {openLB && (
                <LightBox
                    mainSrc={product.images[photoIndex].originalImage}
                    prevSrc={product.images[(photoIndex + product.images.length - 1) % product.images.length].originalImage}
                    nextSrc={product.images[(photoIndex + 1) % product.images.length].originalImage}
                    onCloseRequest={closeLightBox}
                    onMoveNextRequest={moveNextPhoto}
                    onMovePrevRequest={movePrevPhoto}
                />
            )}
        </div>
    );
}

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Reveal from "react-awesome-reveal";
import {fadeInUpShorter} from "@/utils/data/keyframes";

export default function IntroSection() {
    return (
        <Carousel  controls={false} indicators={false} fade={true}>
            <Carousel.Item style={{height:'400px'}}>
                <LazyLoadImage
                    className="d-block w-100 slide-bg"
                    alt="First slide"
                    src="images/home/slider/slide1.jpg"
                />
                <Carousel.Caption>
                    <div className="banner-layer">
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1000}>
                            <h2>Winter Fashion Trends</h2>
                            <h3 className="text-uppercase mb-0">Get up to 30% off</h3>
                            <h4 className="m-b-4">on Jackets</h4>
                            <h5 className="text-uppercase">
                                Starting at{' '}
                                <span className="coupon-sale-text">
                                    <sup>$</sup>199<sup>99</sup>
                                </span>
                            </h5>
                            <Link href="/shop" className="btn btn-dark btn-xl" role="button">
                                Shop Now
                            </Link>
                        </Reveal>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'400px'}}>
                <LazyLoadImage
                    className="d-block w-100 slide-bg"
                    alt="Second slide"
                    src="images/home/slider/slide2.jpg"
                />
                <Carousel.Caption>
                    <div className="banner-layer text-uppercase">
                        <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
                            <h2 className="text-transform-none">New Season Hats </h2>
                            <h3 className="text-uppercase rotated-upto-text mb-0">
                                <small>Up to</small>20% off
                            </h3>
                            <hr className="short-thick-divider mb-sm-0 mb-1" />
                            <div>
                                <h5 className="text-uppercase d-inline-block mb-2 mb-sm-0">
                                    Starting at <span>$<em>19</em>99</span>
                                </h5>
                                <Link href="/shop" className="btn btn-dark btn-xl btn-icon-right" role="button">
                                    Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

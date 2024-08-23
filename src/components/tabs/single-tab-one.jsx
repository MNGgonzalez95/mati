import React from 'react';
import ALink from '../cammon/ALink';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import productData from '../../helper/product.json'; 

export default function SingleTabOne({ adClass = "" }) {
    const product = productData.product; 

    function activeHandler(e) {
        e.preventDefault();
        document.querySelector('.add-product-review .active') && document.querySelector('.add-product-review .active').classList.remove('active');
        e.currentTarget.classList.add('active');
    }

    return (
        <>
            <div className="skel-pro-tabs"></div>
            {
                product &&
                <Tabs className={`product-single-tabs ${adClass}`} selectedTabClassName="active" selectedTabPanelClassName="show">
                    <TabList className="nav nav-tabs">
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Description</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Size Guide</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Additional Information</ALink>
                        </Tab>
                        <Tab className="nav-item">
                            <ALink href="#" className="nav-link">Reviews ({product.reviews})</ALink>
                        </Tab>
                    </TabList>

                    <TabPanel className="tab-pane fade">
                        <div className="product-desc-content">
                            <p>{product.short_description}</p>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                        <div className="product-size-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={product.images[0].standardUrl} alt="Tostadora" width="217" height="398" />
                                </div>
                                <div className="col-md-8">
                                    <table className="table table-size">
                                        <thead>
                                            <tr>
                                                <th>SIZE</th>
                                                <th>CHEST (in.)</th>
                                                <th>WAIST (in.)</th>
                                                <th>HIPS (in.)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.size_guide.map((size, index) => (
                                                <tr key={index}>
                                                    <td>{size.size}</td>
                                                    <td>{size.chest}</td>
                                                    <td>{size.waist}</td>
                                                    <td>{size.hips}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                        <table className="table table-striped mt-2">
                            <tbody>
                                <tr>
                                    <th>Weight</th>
                                    <td>{product.additional_info.weight}</td>
                                </tr>
                                <tr>
                                    <th>Dimensions</th>
                                    <td>{product.additional_info.dimensions}</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>{product.additional_info.colors.join(", ")}</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>{product.additional_info.sizes.join(", ")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                        <div className="product-reviews-content">
                            {product.reviews !== 0 ? (
                                <>
                                    <h3 className="reviews-title">1 review for {product.name}</h3>
                                    <div className="comment-list">
                                        {product.reviews_details.map((review, index) => (
                                            <div className="comments" key={index}>
                                                <figure className="img-thumbnail">
                                                    <img src="images/blog/author.jpg" alt="author" width="80" height="80" />
                                                </figure>
                                                <div className="comment-block">
                                                    <div className="comment-header">
                                                        <div className="comment-arrow"></div>
                                                        <div className="ratings-container float-sm-right">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{ width: `${20 * review.rating}%` }}></span>
                                                                <span className="tooltiptext tooltip-top">{review.rating}</span>
                                                            </div>
                                                        </div>
                                                        <span className="comment-by">
                                                            <strong>{review.author}</strong> – {review.date}
                                                        </span>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>{review.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="reviews-title">Review</h3>
                                    <p>There are no reviews yet.</p>
                                </>
                            )}

                            <div className="divider"></div>
                            <div className="add-product-review">
                                <h3 className="review-title">Add a review</h3>
                                <form action="#" className="comment-form m-0">
                                    <div className="rating-form">
                                        <label htmlFor="rating">Your rating <span className="required">*</span></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            }
        </>
    );
}

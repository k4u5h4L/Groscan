const GroceryMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="px-3 pt-1 pb-3 bg-primary">
                    <form className="row">
                        <div className="col-6">
                            <select className="form-select form-select-sm bg-primary-light text-white border-0">
                                <option>Sort by</option>
                                <option>Price</option>
                                <option>Name</option>
                                <option>Rating</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <button
                                type="button"
                                data-bs-target="#offcanvas_filter"
                                data-bs-toggle="offcanvas"
                                className="btn w-100 btn-sm btn-primary-light text-start text-white border-0"
                            >
                                Show filter
                            </button>
                        </div>
                    </form>
                </section>

                <section>
                    <div className="p-3">
                        <ul className="row">
                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/1.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">
                                            Great product name
                                        </p>

                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "100%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$99.50</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/2.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">
                                            Product name goes here
                                        </p>

                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$72.50</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/3.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">
                                            Smartwatch Apple 32GB
                                        </p>

                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "60%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$9.95</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/4.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">
                                            Gaming Headset Black
                                        </p>

                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "20%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$23.00</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/5.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$23.00</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/6.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$23.00</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/7.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$23.00</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/6.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>
                                        <p className="title">
                                            Backpack for Travel
                                        </p>
                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$13.00</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="images/items/item.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>
                                        <p className="title">
                                            Great product name
                                        </p>
                                        <div className="rating-wrap">
                                            <ul className="rating-stars">
                                                <li
                                                    style={{ width: "80%" }}
                                                    className="stars-active"
                                                >
                                                    <img
                                                        src="images/misc/stars-active.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                                <li>
                                                    <img
                                                        src="images/misc/stars-disable.svg"
                                                        height="16"
                                                        alt="stars"
                                                    />
                                                </li>
                                            </ul>
                                            <small className="label-rating text-muted">
                                                9/10
                                            </small>
                                        </div>

                                        <div className="price">$23.00</div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i> More
                        pages
                    </a>
                </p>
                <br />
            </main>
        </>
    );
};

export default GroceryMain;

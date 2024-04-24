const GroceryMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="px-3 pt-1 pb-3 bg-primary">
                    <form className="row">
                        <div className="col-6">
                            <select className="form-select form-select-sm bg-primary-light text-white border-0">
                                <option>Name</option>
                                <option>Expiry</option>
                                <option>Quantity</option>
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
                                        <img src="https://img.freepik.com/free-photo/green-lettuce-white-surface_144627-45188.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">Lettuce</p>

                                        <div className="rating-wrap">
                                            {/* <ul className="rating-stars">
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
                                            </ul> */}
                                            <small className="label-rating text-muted">
                                                1 pack(s)
                                            </small>
                                        </div>
                                        <div className="price">2 days left</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/front-view-sliced-fresh-bread_23-2148613522.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">Brown Bread</p>

                                        <div className="rating-wrap">
                                            {/* <ul className="rating-stars">
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
                                            </ul> */}
                                            <small className="label-rating text-muted">
                                                2 pack(s)
                                            </small>
                                        </div>

                                        <div className="price">3 days left</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">Cucumber</p>

                                        <div className="rating-wrap">
                                            {/* <ul className="rating-stars">
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
                                            </ul> */}
                                            <small className="label-rating text-muted">
                                                2 pack(s)
                                            </small>
                                        </div>

                                        <div className="price">3 days left</div>
                                    </div>
                                </article>
                            </li>

                            <li className="col-12 col-sm-12 col-md-6">
                                <article className="product-list mb-2">
                                    <a href="#" className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/top-view-delicious-creamy-ice-cream_23-2150796528.jpg" />
                                    </a>
                                    <div className="info-wrap">
                                        <a href="#" className="float-end">
                                            <i className="material-icons md-favorite_border"></i>
                                        </a>

                                        <p className="title">Gelato</p>

                                        <div className="rating-wrap">
                                            {/* <ul className="rating-stars">
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
                                            </ul> */}
                                            <small className="label-rating text-muted">
                                                3 pack(s)
                                            </small>
                                        </div>

                                        <div className="price">
                                            10 days left
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i> More
                        pages
                    </a>
                </p>
                <br /> */}
            </main>
        </>
    );
};

export default GroceryMain;

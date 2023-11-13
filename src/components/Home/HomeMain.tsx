const HomeMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="px-3 pb-2 pt-1 bg-primary scroll-horizontal">
                    <div className="item-lg">
                        <article
                            className="card card-banner"
                            style={{
                                height: "160px",
                                backgroundImage: `url('images/banners/banner1.jpg')`,
                            }}
                        >
                            <div className="card-body caption">
                                <h5 className="card-title mb-3">
                                    Great offers <br />
                                    just started now
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    Discover
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="item-lg">
                        <article
                            className="card card-banner"
                            style={{
                                height: "160px",
                                backgroundImage: `url('images/banners/banner2.jpg')`,
                            }}
                        >
                            <div className="card-body caption">
                                <h5 className="card-title mb-3">
                                    Super deals <br />
                                    Just started now
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    Ler more
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="item-lg">
                        <article
                            className="card card-banner"
                            style={{
                                height: "160px",
                                backgroundImage: `url('images/banners/banner3.jpg')`,
                            }}
                        >
                            <div className="card-body caption">
                                <h5 className="card-title mb-3">
                                    Great deals <br />
                                    is starting now
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    Get now
                                </a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="px-3 pt-3">
                    <ul className="row">
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/shirt.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text"> Shirts</small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/shoe-lady.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text"> Women</small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/toy.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text">
                                    {" "}
                                    Kid&apos;s &amp; toys{" "}
                                </small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/watch.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text"> Accesories </small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/book.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text"> Education </small>
                            </a>
                        </li>
                        <li className="col-4">
                            <a href="#" className="item-category-grid">
                                <span className="icon-wrap">
                                    <img
                                        className="icon"
                                        height="32"
                                        src="images/icons/category-blue/spa.svg"
                                        alt=""
                                    />
                                </span>
                                <small className="text"> Flowers </small>
                            </a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h5 className="title-section">New arrival</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/1.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$13.90</div>

                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/2.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$90.80</div>

                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/3.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>

                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/4.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$9.50</div>

                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/5.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>

                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/6.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>

                                    <p className="title">Product name</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="images/items/7.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">$63.00</div>

                                    <p className="title">Great item name</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section">Recommended</h5>

                    <div className="p-3">
                        <ul className="row">
                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/3.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Amazing item name
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/2.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Great product name is just here
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/1.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Great product name is here
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/2.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Name of the item
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/3.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Produt name
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/4.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Great product name
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/5.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Name of the item
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="images/items/6.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">$17.00</div>

                                        <p className="title text-truncate">
                                            Great product nam
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <a href="index.html" className="btn w-100 btn-light">
                        <i className="material-icons md-arrow_back"></i>
                        All pages
                    </a>
                </p>
                <br />
            </main>
        </>
    );
};

export default HomeMain;

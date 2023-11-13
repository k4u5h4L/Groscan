const GroceryDetailMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="gallery-wrap">
                    <a
                        href="/images/items/5.jpg"
                        data-fancybox="gallery"
                        className="img-big-wrap"
                    >
                        <img src="/images/items/5.jpg" />
                    </a>
                </section>

                <section className="p-3">
                    <a href="#" className="btn btn-light btn-icon float-end">
                        <i className="material-icons md-favorite_border"></i>
                    </a>

                    <p className="mb-0">Product name goes here</p>
                    <div className="price-wrap">
                        <span className="h5 price">$129.95</span>
                    </div>

                    <hr />

                    <div className="rating-wrap mb-2">
                        <ul className="rating-stars">
                            <li
                                style={{ width: "80%" }}
                                className="stars-active"
                            >
                                <img
                                    src="/images/misc/stars-active.svg"
                                    height="16"
                                    alt="stars"
                                />
                            </li>
                            <li>
                                <img
                                    src="/images/misc/stars-disable.svg"
                                    height="16"
                                    alt="stars"
                                />
                            </li>
                        </ul>
                        <span className="label-rating text-muted">
                            34 feedback
                        </span>
                        <i className="dot"></i>
                        <span className="label-rating text-muted">87 sold</span>
                    </div>

                    <dl className="dlist-align">
                        <dt className="text-muted">Catgeory</dt>
                        <dd>
                            <a href="#">Clothes, Wears</a>
                        </dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">Color</dt>
                        <dd>Orange</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">Size</dt>
                        <dd>120sm x 300sm</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">Material</dt>
                        <dd>Cotton</dd>
                    </dl>

                    <article className="mt-3">
                        <p>
                            Tovar xarakteristikasi uchun tekst tekst shunchaki
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt
                            <br />
                            <a href="#" className="btn-link">
                                Read more{" "}
                            </a>
                        </p>
                    </article>
                </section>

                <hr className="divider" />

                <section>
                    <h5 className="title-section">Reviews (2)</h5>
                    <div className="p-3">
                        <article>
                            <div className="icontext mb-2">
                                <span className="icon">
                                    <img
                                        src="/images/avatars/1.jpg"
                                        className="avatar-sm"
                                        alt=""
                                    />
                                </span>
                                <div>
                                    <p>
                                        Michael John
                                        <span className="text-muted">
                                            - Purchased
                                        </span>
                                    </p>
                                    <span className="text-warning">Good!</span>
                                </div>
                            </div>
                            <p className="text-muted">
                                Good! Tello Edu drone is an ideal companion for
                                anyone engaged Lorem ipsum dolor sit amet <br />
                                <a href="#" className="text-link">
                                    {" "}
                                    Read comment
                                </a>
                            </p>
                        </article>
                        <hr />
                        <article>
                            <div className="icontext mb-2">
                                <span className="icon">
                                    <img
                                        src="/images/avatars/2.jpg"
                                        className="avatar-sm"
                                        alt=""
                                    />
                                </span>
                                <div>
                                    <p>
                                        Alexandra K.
                                        <span className="text-muted">
                                            - Purchased
                                        </span>
                                    </p>
                                    <span className="text-warning">Best!</span>
                                </div>
                            </div>
                            <p className="text-muted">
                                I liked this Tello Edu drone is an ideal
                                companion for anyone engaged Lorem ipsum dolor
                                sit amet <br />
                                <a href="#" className="text-link">
                                    {" "}
                                    Read comment
                                </a>
                            </p>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};

export default GroceryDetailMain;

"use client";

const CartMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="p-3">
                    <article className="item-cart">
                        <figure className="itemside mb-3">
                            <div className="aside">
                                <img
                                    src="https://img.freepik.com/free-photo/green-lettuce-white-surface_144627-45188.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Lettuce
                                </a>
                                <small className="text-muted">
                                    {/* Packs: 1 <br /> */}
                                    Expiry: 2 days
                                </small>
                            </figcaption>
                        </figure>

                        <div className="row align-items-center">
                            <div className="col-auto">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    {" "}
                                    Remove{" "}
                                </a>{" "}
                            </div>
                            <div className="col">
                                <div className="input-group input-group-sm input-spinner">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-minus"></i>
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value="1"
                                        onChange={() => console.log("changed")}
                                    />
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-plus"></i>
                                    </button>
                                </div>
                            </div>
                            {/* <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div> */}
                        </div>
                    </article>

                    <hr />

                    <article className="item-cart">
                        <figure className="itemside mb-3">
                            <div className="aside">
                                <img
                                    src="https://img.freepik.com/free-photo/front-view-sliced-fresh-bread_23-2148613522.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Brown Bread
                                </a>
                                <small className="text-muted">
                                    Expiry: 3 days
                                </small>
                            </figcaption>
                        </figure>

                        <div className="row align-items-center">
                            <div className="col-auto">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    {" "}
                                    Remove{" "}
                                </a>{" "}
                            </div>
                            <div className="col">
                                <div className="input-group input-group-sm input-spinner">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-minus"></i>
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value="1"
                                        onChange={() => console.log("changed")}
                                    />
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-plus"></i>
                                    </button>
                                </div>
                            </div>
                            {/* <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div> */}
                        </div>
                    </article>

                    <hr />

                    <article className="item-cart">
                        <figure className="itemside mb-3">
                            <div className="aside">
                                <img
                                    src="https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Cucumber
                                </a>
                                <small className="text-muted">
                                    Expiry: 3 days
                                </small>
                            </figcaption>
                        </figure>

                        <div className="row align-items-center">
                            <div className="col-auto">
                                {" "}
                                <a
                                    href="#"
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    {" "}
                                    Remove{" "}
                                </a>{" "}
                            </div>
                            <div className="col">
                                <div className="input-group input-group-sm input-spinner">
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-minus"></i>
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value="2"
                                        onChange={() => console.log("changed")}
                                    />
                                    <button
                                        className="btn btn-light"
                                        type="button"
                                    >
                                        {" "}
                                        <i className="material-icons md-plus"></i>
                                    </button>
                                </div>
                            </div>
                            {/* <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div> */}
                        </div>
                    </article>
                </section>

                <hr className="divider" />

                <section className="padding-around">
                    <dl className="dlist-align">
                        <dt className="text-muted">Total items:</dt>
                        <dd className="text-end">4</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">Min Expiry:</dt>
                        <dd className="text-end">2 days</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">
                            <strong>Recurring?</strong>
                        </dt>
                        <dd className="text-end">
                            <strong>No (feature soon to come!)</strong>
                        </dd>
                    </dl>
                    <br />
                    <a
                        style={{ cursor: "pointer" }}
                        className="btn btn-light w-100"
                    >
                        {" "}
                        Scan more{" "}
                    </a>
                    <a href="#" className="btn btn-primary w-100 mb-2">
                        {" "}
                        Proceed{" "}
                    </a>
                    <br /> <br />
                </section>
            </main>
        </>
    );
};

export default CartMain;

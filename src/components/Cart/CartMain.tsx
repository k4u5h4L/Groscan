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
                                    src="images/items/1.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Great product name
                                </a>
                                <small className="text-muted">
                                    Color: red, Capacity: 32 GB <br />
                                    $34.00 /per item
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
                            <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div>
                        </div>
                    </article>

                    <hr />

                    <article className="item-cart">
                        <figure className="itemside mb-3">
                            <div className="aside">
                                <img
                                    src="images/items/2.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Great product name
                                </a>
                                <small className="text-muted">
                                    Color: red, Capacity: 32 GB <br />
                                    $34.00 /per item
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
                            <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div>
                        </div>
                    </article>

                    <hr />

                    <article className="item-cart">
                        <figure className="itemside mb-3">
                            <div className="aside">
                                <img
                                    src="images/items/3.jpg"
                                    className="rounded border img-md"
                                />
                            </div>
                            <figcaption className="info">
                                <a href="#" className="title text-truncate">
                                    Great product name
                                </a>
                                <small className="text-muted">
                                    Color: red, Capacity: 32 GB <br />
                                    $34.00 /per item
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
                            <div className="col">
                                {" "}
                                <var className="float-end price">
                                    2x = $120.00
                                </var>
                            </div>
                        </div>
                    </article>
                </section>

                <hr className="divider" />

                <section className="padding-around">
                    <dl className="dlist-align">
                        <dt className="text-muted">Total price:</dt>
                        <dd className="text-end">$69.97</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">Shipping:</dt>
                        <dd className="text-end">$10.00</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt className="text-muted">
                            <strong>Total:</strong>
                        </dt>
                        <dd className="text-end">
                            <strong>$59.97</strong>
                        </dd>
                    </dl>
                    <br />
                    <a href="#" className="btn btn-primary w-100 mb-2">
                        {" "}
                        Purchase{" "}
                    </a>
                    <a href="index.html" className="btn btn-light w-100">
                        {" "}
                        Back to shop{" "}
                    </a>
                    <br /> <br />
                </section>
            </main>
        </>
    );
};

export default CartMain;

const CategoryMain = () => {
    return (
        <>
            <main className="app-content">
                {/* <section className="px-3 pb-3 pt-1 bg-primary">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-primary-light border-0 form-control"
                    />
                </section> */}

                <section>
                    <ul className="p-3 list-menu">
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category/vegetable.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Vegetables</h6>
                                    <span className="text-muted">2 items</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category/leaves.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Leaves</h6>
                                    <span className="text-muted">1 item</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="icontext">
                                <span className="icon icon-sm rounded">
                                    <img
                                        src="/images/icons/category/ice-cream.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="text">
                                    <h6 className="title">Ice cream</h6>
                                    <span className="text-muted">1 item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
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

export default CategoryMain;

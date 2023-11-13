const SearchMain = () => {
    return (
        <>
            <main className="app-content">
                <section className="p-3">
                    <ul className="list-search-history">
                        <li>
                            <a href="#" className="text">
                                {" "}
                                New clothes{" "}
                            </a>
                            <a href="#" className="btn-control">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text">
                                {" "}
                                Nike shoes for men{" "}
                            </a>
                            <a href="#" className="btn-control float-right">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text">
                                {" "}
                                Some previous search{" "}
                            </a>
                            <a href="#" className="btn-control float-right">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text">
                                {" "}
                                Great list item{" "}
                            </a>
                            <a href="#" className="btn-control float-right">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text">
                                {" "}
                                Some previous search{" "}
                            </a>
                            <a href="#" className="btn-control float-right">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text">
                                {" "}
                                Great list item{" "}
                            </a>
                            <a href="#" className="btn-control float-right">
                                <i className="material-icons md-close"></i>
                            </a>
                        </li>
                    </ul>
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

export default SearchMain;

import Link from "next/link";
import HomeCategory from "../containers/Home/HomeCategory/HomeCategory";

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
                                    Boought something new? Yay! <br />
                                    Add it to your inventory
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    Add
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="item-lg">
                        <article
                            className="card card-banner"
                            style={{
                                height: "160px",
                                backgroundImage: `url('images/banners/banner-cat1.jpg')`,
                            }}
                        >
                            <div className="card-body caption">
                                <h5 className="card-title mb-3">
                                    Don&apos;t know what to do with your
                                    groceries?
                                    <br />
                                    Ask our AI
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    Let&apos;s chat!
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
                                    Consumed something? <br />
                                    Just mark it as consumed
                                </h5>
                                <a href="#" className="btn btn-sm btn-warning">
                                    I&apos;ve eaten it!
                                </a>
                            </div>
                        </article>
                    </div>
                </section>

                <HomeCategory />

                <section>
                    <h5 className="title-section">Newly Added</h5>
                    <div className="p-3 scroll-horizontal">
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="https://img.freepik.com/free-photo/green-lettuce-white-surface_144627-45188.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">2 days left</div>

                                    <p className="title">Lettuce</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="https://img.freepik.com/free-photo/front-view-sliced-fresh-bread_23-2148613522.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">3 days left</div>

                                    <p className="title">Brown Bread</p>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="#" className="product">
                                <div className="img-wrap">
                                    <img src="https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg" />
                                </div>
                                <div className="text-wrap">
                                    <div className="price">3 days left</div>

                                    <p className="title">Cucumber</p>
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
                                        <img src="https://img.freepik.com/free-photo/green-lettuce-white-surface_144627-45188.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">2 days left</div>

                                        <p className="title text-truncate">
                                            Lettuce
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/front-view-sliced-fresh-bread_23-2148613522.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">3 days left</div>

                                        <p className="title text-truncate">
                                            Brown Bread
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">3 days left</div>

                                        <p className="title text-truncate">
                                            Cucumber
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li className="col-6 col-sm-4 col-md-3">
                                <a href="#" className="product mb-3">
                                    <div className="img-wrap">
                                        <img src="https://img.freepik.com/free-photo/top-view-delicious-creamy-ice-cream_23-2150796528.jpg" />
                                    </div>
                                    <div className="text-wrap">
                                        <div className="price">
                                            10 days left
                                        </div>

                                        <p className="title text-truncate">
                                            Gelato
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <p className="text-center mx-3">
                    <Link href="/grocery" className="btn w-100 btn-light">
                        <i className="material-icons md-local_grocery_store"></i>{" "}
                        All groceries
                    </Link>
                </p>
                <br />
            </main>
        </>
    );
};

export default HomeMain;

import { useSession } from "next-auth/react";

const Sidebar = () => {
    const { data: session, status } = useSession();

    if (status != "authenticated") {
        return null;
    }

    return (
        // TODO: Add next/link to all the hyperlinks
        <>
            <aside
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvas_left_123"
            >
                <header className="p-3 border-bottom bg-light">
                    <button
                        type="button"
                        className="float-end btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>

                    <a href="#" className="icontext">
                        <img
                            src={session.user.image ?? ""}
                            className="icon avatar-sm"
                            alt=""
                        />
                        <div className="text">
                            <h6 className="mb-0">Hi, {session.user.name}</h6>
                            <small>My profile</small>
                        </div>
                    </a>
                </header>
                <article className="offcanvas-body">
                    <nav className="nav-sidebar mt-2">
                        <a href="index.html">
                            <i className="material-icons md-apps"></i> All pages
                        </a>
                        <a href="#">
                            <i className="material-icons md-local_offer"></i>{" "}
                            New offers
                        </a>
                        <a href="#">
                            <i className="material-icons md-store"></i>{" "}
                            Wholsesalers
                        </a>
                        <hr />
                        <a href="#">
                            <i className="material-icons md-info"></i> About us
                        </a>
                        <a href="#">
                            <i className="material-icons md-chat"></i> Help
                            &amp; support
                        </a>
                        <a href="#">
                            <i className="material-icons md-local_police"></i>{" "}
                            Services
                        </a>
                        <hr />
                        <a href="#">
                            <i className="material-icons md-account_circle"></i>{" "}
                            Profile
                        </a>
                        <a href="#">
                            <i className="material-icons md-settings"></i>{" "}
                            Settings
                        </a>
                        <a href="#">
                            <i className="material-icons md-local_shipping"></i>{" "}
                            My orders
                        </a>
                    </nav>
                </article>
            </aside>
        </>
    );
};

export default Sidebar;

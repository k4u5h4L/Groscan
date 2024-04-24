import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

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

                    <Link href="/profile" className="icontext">
                        <img
                            src={session.user.image ?? ""}
                            className="icon avatar-sm"
                            alt=""
                        />
                        <div className="text">
                            <h6 className="mb-0">Hi, {session.user.name}</h6>
                            <small>My profile</small>
                        </div>
                    </Link>
                </header>
                <article className="offcanvas-body">
                    <nav className="nav-sidebar mt-2">
                        <Link href="/">
                            <i className="material-icons md-apps"></i> Home
                        </Link>
                        <Link href="/grocery">
                            <i className="material-icons md-local_offer"></i>{" "}
                            All groceries
                        </Link>
                        <Link href="/category">
                            <i className="material-icons md-store"></i> All
                            categories
                        </Link>
                        <hr />
                        <a href="#">
                            <i className="material-icons md-info"></i> About
                            Groscan
                        </a>
                        <a href="#">
                            <i className="material-icons md-chat"></i> Help
                            &amp; support
                        </a>
                        <a href="#">
                            <i className="material-icons md-local_police"></i>{" "}
                            AI Services
                        </a>
                        <hr />
                        <Link href="/profile">
                            <i className="material-icons md-account_circle"></i>{" "}
                            Profile
                        </Link>
                        <Link href="/login">
                            <i className="material-icons md-verified_user"></i>{" "}
                            Check session
                        </Link>
                        <a
                            style={{ cursor: "pointer" }}
                            onClick={() => signOut()}
                        >
                            <i className="material-icons md-local_shipping"></i>{" "}
                            Logout
                        </a>
                    </nav>
                </article>
            </aside>
        </>
    );
};

export default Sidebar;

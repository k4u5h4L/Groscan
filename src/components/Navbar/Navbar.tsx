import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const pathname = router.pathname;

    return (
        <>
            <nav className="nav-bottom">
                <Link
                    href="/"
                    className={`nav-link ${pathname == "/" ? "active" : ""}`}
                >
                    <i className="icon material-icons md-home"></i>
                    <span className="text">Home</span>
                </Link>
                <Link
                    href="/category"
                    className={`nav-link ${pathname.includes("category") ? "active" : ""}`}
                >
                    <i className="icon material-icons md-apps"></i>
                    <span className="text">Category</span>
                </Link>
                <Link
                    href="/cart"
                    className={`nav-link ${pathname.includes("cart") ? "active" : ""}`}
                >
                    <i className="icon material-icons md-shopping_cart"></i>
                    <span className="text">My cart</span>
                </Link>
                <Link
                    href="/profile"
                    className={`nav-link ${pathname.includes("profile") ? "active" : ""}`}
                >
                    <i className="icon material-icons md-account_circle"></i>
                    <span className="text">Profile</span>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;

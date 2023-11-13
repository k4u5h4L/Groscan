"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type PropType = {
    headerName: string;
    showMenu?: boolean;
};

const Header = ({ headerName, showMenu = true }: PropType) => {
    const router = useRouter();

    return (
        <>
            <header className="app-header ondark bg-primary">
                {showMenu ? (
                    <a
                        href="#offcanvas_left_123"
                        data-bs-toggle="offcanvas"
                        role="button"
                        className="btn-header cursor-pointer"
                    >
                        <i className="material-icons md-menu"></i>
                    </a>
                ) : (
                    <a
                        className="btn-header cursor-pointer"
                        onClick={() => router.back()}
                    >
                        <i className="material-icons md-arrow_back"></i>
                    </a>
                )}

                <h5 className="title-header">{headerName}</h5>

                <Link href="/search" className="btn-header">
                    <i className="material-icons md-search"></i>
                </Link>
            </header>
        </>
    );
};

export default Header;

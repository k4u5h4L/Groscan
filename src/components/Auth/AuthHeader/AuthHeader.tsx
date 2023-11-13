"use client";

import Link from "next/link";

const AuthHeader = () => {
    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <Link href="/" className="btn-header">
                    <i className="material-icons md-home"></i>
                </Link>
            </header>
        </>
    );
};

export default AuthHeader;

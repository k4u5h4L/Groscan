"use client";

import { useRouter } from "next/navigation";

const SearchHeader = () => {
    const router = useRouter();

    return (
        <>
            <header className="app-header ondark fixed-top bg-primary">
                <a
                    onClick={() => router.back()}
                    className="btn-header cursor-pointer"
                >
                    <i className="material-icons md-arrow_back"></i>
                </a>

                <div className="w-100">
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control input-dark"
                    />
                </div>
            </header>
        </>
    );
};

export default SearchHeader;

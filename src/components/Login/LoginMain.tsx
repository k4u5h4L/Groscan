"use client";
import { useSession, signOut, signIn } from "next-auth/react";

const LoginMain = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <>
                <main className="app-content">
                    <div className="pb-1 pt-3 bg-primary">
                        <h3 className="title-lg text-white">Sign in</h3>
                    </div>

                    <section className="p-3">
                        <p className="text-center p-3">
                            Not <b>{session.user.name}</b> ? You can logout and
                            login again!
                        </p>
                        <form className="m-3">
                            <button
                                className="btn btn-primary w-100"
                                type="button"
                                onClick={() => signOut()}
                            >
                                Sign Out
                            </button>
                        </form>
                    </section>
                </main>
            </>
        );
    }

    return (
        <>
            <main className="app-content">
                <div className="pb-1 pt-3 bg-primary">
                    <h3 className="title-lg text-white">Sign in</h3>
                </div>

                <section className="p-3">
                    <p className="text-center p-3">
                        Login to start using Groscan! We only use GitHub logins
                        for now...
                    </p>
                    <form className="m-3">
                        <button
                            className="btn btn-primary w-100"
                            style={{ backgroundColor: "black" }}
                            onClick={() => signIn("github")}
                            type="button"
                        >
                            Sign in using GitHub
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default LoginMain;

/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect, type ReactNode } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PUBLIC_PATHS } from "~/constants/CommonConstants";

interface PropType {
    children?: ReactNode;
}

export default function RouteGuard({ children }: PropType) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const { status } = useSession();

    useEffect(() => {
        // on initial load - run auth check
        if (status != "loading") {
            authCheck(router.asPath);

            // on route change start - hide page content by setting authorized to false
            const hideContent = () => setAuthorized(false);
            router.events.on("routeChangeStart", hideContent);

            // on route change complete - run auth check
            router.events.on("routeChangeComplete", authCheck);

            // unsubscribe from events in useEffect return function
            return () => {
                router.events.off("routeChangeStart", hideContent);
                router.events.off("routeChangeComplete", authCheck);
            };
        }

        function authCheck(url: string) {
            // redirect to login page if accessing a private page and not logged in
            const path = url.split("?")[0]!;
            if (status != "authenticated" && !PUBLIC_PATHS.includes(path)) {
                setAuthorized(false);
                router.replace({
                    pathname: "/login",
                    query: { returnUrl: router.asPath },
                });
            } else {
                setAuthorized(true);
            }
        }
    }, [router, status]);

    return authorized && children;
}

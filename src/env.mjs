import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        DATABASE_URL: z
            .string()
            .url()
            .refine(
                (str) => !str.includes("YOUR_MYSQL_URL_HERE"),
                "You forgot to change the default URL"
            ),
        NODE_ENV: z
            .enum(["development", "test", "production"])
            .default("development"),
        // NEXTAUTH_SECRET:
        //     process.env.NODE_ENV === "production"
        //         ? z.string()
        //         : z.string().optional(),
        NEXTAUTH_URL: z.preprocess(
            // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
            // Since NextAuth.js automatically uses the VERCEL_URL if present.
            (str) => process.env.VERCEL_URL ?? str,
            // VERCEL_URL doesn't include `https` so it cant be validated as a URL
            process.env.VERCEL ? z.string() : z.string().url()
        ),
        AUTH_SECRET: z.string(),
        JWT_SECRET: z.string(),
        // Add ` on ID and SECRET if you want to make sure they're not empty
        GITHUB_CLIENT_ID: z.string(),
        GITHUB_CLIENT_SECRET: z.string(),
        CLOUDINARY_URL: z.string(),
        CLOUDINARY_CLOUD_NAME: z.string(),
        CLOUDINARY_API_KEY: z.string(),
        CLOUDINARY_API_SECRET: z.string(),
        VERCEL_URL: z.string(),
        CRON_SECRET: z.string(),
        TESTING_EMAIL: z.string(),
    },

    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        // NEXT_PUBLIC_CLIENTVAR: z.string(),
        NEXT_PUBLIC_SERVER_URL: z.string().url(),
        NEXT_PUBLIC_APOLLO_CLIENT_URL: z.string(),
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        AUTH_SECRET: process.env.AUTH_SECRET,
        JWT_SECRET: process.env.JWT_SECRET,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        VERCEL_URL:
            process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_SERVER_URL,
        NEXT_PUBLIC_APOLLO_CLIENT_URL:
            process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_SERVER_URL,
        CRON_SECRET: process.env.CRON_SECRET,
        TESTING_EMAIL: process.env.TESTING_EMAIL,
    },
    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
     * useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    /**
     * Makes it so that empty strings are treated as undefined.
     * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
     */
    emptyStringAsUndefined: true,
});

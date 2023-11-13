// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import logger from "~/config/logger";
import { env } from "~/env.mjs";

type Data = {
    message: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    logger.info("Hit welcome API");
    res.status(200).json({
        message: `Welcome to Ecospense. Please visit ${env.VERCEL_URL}`,
    });
}

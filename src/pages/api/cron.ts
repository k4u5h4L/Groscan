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
    logger.info("Hit CRON API");

    try {
        const authHeader = req.headers.authorization ?? "";
        if (authHeader !== `Bearer ${env.CRON_SECRET}`) {
            return res.status(401).json({ message: "UNAUTHORIZED" });
        }

        res.status(200).json({
            message: `Successfully triggered cronjob`,
        });
    } catch (err) {
        logger.error("Error in checking cron auth");
        console.error(err);
        res.status(500).json({ message: "Error in running the cron job" });
    }
}

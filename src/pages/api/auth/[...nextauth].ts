/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

import { authOptions } from "~/server/security/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, authOptions);

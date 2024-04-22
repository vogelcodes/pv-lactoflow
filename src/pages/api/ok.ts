import { type NextApiRequest, type NextApiResponse } from "next";
export const runtime = "edge";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "OK" });
}

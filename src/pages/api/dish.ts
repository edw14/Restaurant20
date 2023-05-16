import { type NextApiRequest, type NextApiResponse } from "next";

type ResponseData = {
  dishes: [];
};

export default function dishHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): void {
  console.log(req.body);
  if (req.method === "GET") {
    res.status(200).json({ dishes: [] });
    return;
  }

  if (req.method === "POST") {
    res.status(501).end();

    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method ?? ""} is not allowed.`);
}

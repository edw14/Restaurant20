import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function DishFormHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): void {
  console.log(req.body);
  res.status(200).json({ message: "Hello from Next.js!" });
}

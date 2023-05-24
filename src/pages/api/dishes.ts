import { type NextApiRequest, type NextApiResponse } from "next";
import { type Dish, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ResponseData = {
  dishes: Dish[];
};

export default async function dishesHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  if (req.method === "GET") {
    // Fetching data from the database <----findMany returns all record
    const dishes = await prisma.dish.findMany();
    // Below is a shorthand syntax,cuz we dont neeed to write out both times like this:*{ dishes: dishes } *
    res.status(200).json({ dishes });
    return;
  }
}

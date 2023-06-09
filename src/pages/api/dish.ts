import { type NextApiRequest, type NextApiResponse } from "next";
import { type Dish, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ResponseData = {
  dish: Dish;
};

export default async function dishHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.body);
  if (req.method === "GET") {
    res.status(200).json({ dish: {} as Dish });
    return;
  }

  if (req.method === "POST") {
    const obj: unknown =
      typeof req.body === "string" ? JSON.parse(req.body) : {};

    if (obj === null || obj === undefined || !(typeof obj === "object")) {
      res.status(400).end(`Dish object is required. Received: ${typeof obj}`);
      return;
    }

    if (
      !("name" in obj) ||
      typeof obj.name !== "string" ||
      obj.name.length === 0
    ) {
      res.status(400).end(`Dish name is required, also dish is not a kneedle.`);
    }

    if (
      !("description" in obj) ||
      typeof obj.description !== "string" ||
      obj.description.length === 0
    ) {
      res
        .status(400)
        .end(`Dish description is required, mostly as per say. Received:`);
    }

    if (
      !("category" in obj) ||
      typeof obj.category !== "string" ||
      !["appetizer", "soup", "salad", "mainCourse", "dessert"].includes(
        obj.category
      )
    ) {
      res
        .status(400)
        .end(`Dish category was probably not choosen or incorrect`);
    }

    if (
      !("price" in obj) ||
      typeof obj.price !== "number" ||
      obj.price < 0 ||
      !Number.isInteger(obj.price)
    ) {
      res.status(400).end(`Dish price is probably not a positive integer.`);
    }

    const dish = await prisma.dish.create({ data: obj as Dish });

    res.status(200).json({ dish });

    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method ?? ""} is not allowed.`);
}

import { type Dish } from "@prisma/client";
import React from "react";

type Props = {
  dish: Dish;
};

export default function MenuDish({ dish }: Props) {
  return (
    <article>
      <h2>{dish.name}</h2>-<p>{dish.price}</p>
      <p>{dish.description}</p>
    </article>
  );
}

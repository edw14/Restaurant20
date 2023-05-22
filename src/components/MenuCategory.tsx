import { type Dish } from "@prisma/client";
import React from "react";
import MenuDish from "./MenuDish";

type Props = {
  dishes: Dish[];
};

export default function MenuCategory({ dishes }: Props) {
  return (
    <section style={{ border: "1px solid" }}>
      <h2>{dishes[0]?.category}</h2>
      {dishes.map((dish) => {
        return <MenuDish key={dish.id} dish={dish} />;
      })}
    </section>
  );
}

import React from "react";
import { type Dish } from "src/pages/dishes";

type Props = {
  dish: Dish;
};

export default function MenuDish({ dish }: Props) {
  return (
    <>
      <section>
        <h2> {dish.name} Name: </h2>
      </section>
      <section>
        <p>descripton: </p>
      </section>
    </>
  );
}

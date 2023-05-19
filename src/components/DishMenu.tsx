import React from "react";
import MenuCategory from "./MenuCategory";

export default function MenuDish({ dish }: unknown) {
  return (
    <>
      <section>
        <h2>Dish Name: </h2>
      </section>
      <section>
        <p>descripton: </p>
      </section>
      <MenuCategory />
    </>
  );
}

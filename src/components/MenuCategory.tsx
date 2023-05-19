import React from "react";

type Props = {
  categoryName: Props;
  dishes: string;
};

export default function MenuCategory({ categoryName, dishes }: Props) {
  return (
    <>
      <section>
        <h2>Category: </h2>
      </section>
      <section>
        <p>list of dishes: </p>
      </section>
    </>
  );
}

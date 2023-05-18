import React from "react";
import DishForm from "src/components/DishForm";
import Layout from "src/components/layout";

export type Dish = {
  name: string;
  description: string;
  category: "appetizer" | "salad" | "soup" | "mainCourse" | "dessert";
  price: number;
};

function postDish(dish: Dish) {
  return fetch("/api/dish", {
    method: "POST",
    body: JSON.stringify(dish),
  });
}

export default function DishesPage() {
  return (
    <Layout>
      <section>
        <h2>Dishes</h2>

        <DishForm
          onSubmit={(values) => {
            postDish(values).catch(console.log);
          }}
        />
      </section>
    </Layout>
  );
}

"use client";
import React from "react";
import DishForm from "@/components/DishForm";

export type Dish = {
  name: string;
  description: string;
  category: "appetizer" | "salad" | "soup" | "mainCourse" | "dessert";
  price: number;
};

function postDish(dish: Record<string, unknown>) {
  fetch("/api/dish", {
    method: "POST",
    body: JSON.stringify(dish),
  });
}

export default function DishesPage() {
  return (
    <section>
      <h2>Dishes</h2>

      <DishForm
        onSubmit={(values) => {
          console.log(values);
          postDish(values);
        }}
      />
    </section>
  );
}

import React from "react";
import DishForm from "src/components/DishForm";
import Layout from "src/components/layout";

//export is multidimensional for other files
export type Dish = {
  name: string;
  description: string;
  category: "appetizer" | "salad" | "soup" | "mainCourse" | "dessert";
  price: number;
};

//At "POST" methods we use values for the function parameters
function postDish(dish: Dish) {
  return fetch("/api/dish", {
    method: "POST",
    //with the body we send data (in the GET request we dont have body)
    body: JSON.stringify(dish),
    //.then() is a promise
  }).then((response) => response.json());
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

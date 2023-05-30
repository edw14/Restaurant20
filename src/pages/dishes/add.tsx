import React from "react";
import DishForm from "src/components/DishForm";
import Layout from "src/components/layout";
import { type Dish } from "./[dishId]";

//At "POST" methods we use values for the function parameters
function postDish(dish: Dish) {
  return fetch("/api/dish", {
    method: "POST",
    //with the body we send data (in the GET request we dont have body)
    body: JSON.stringify(dish),
    //.then() is a promise
  }).then((response) => response.json());
}

export default function AddDishPage() {
  return (
    <Layout>
      <section>
        <h2>Add Dish</h2>

        <DishForm
          onSubmit={(values) => {
            postDish(values).catch(console.log);
          }}
        />
      </section>
    </Layout>
  );
}

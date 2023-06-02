import { useState, useEffect } from "react";
import Layout from "src/components/layout";
import { useRouter } from "next/router";
import DishForm from "src/components/DishForm";

//export is multidimensional for other files
export type Dish = {
  name: string;
  description: string;
  category: "appetizer" | "salad" | "soup" | "mainCourse" | "dessert";
  price: number;
};

export default function EditDishPage() {
  const [dish, setDish] = useState<Dish>();
  const router = useRouter();

  useEffect(() => {
    getDishById(
      typeof router.query.dishId === "string" ? router.query.dishId : ""
    )
      .then(({ dish }) => setDish(dish))
      .catch(console.log);
  }, [router.query.dishId]);
  return (
    <Layout>
      <section>
        <h2>{dish?.name}</h2>
        {JSON.stringify(dish)}
        <DishForm onSubmit={console.log} dish={dish} />
      </section>
    </Layout>
  );
}

export function getDishById(dishId: string) {
  return fetch(`/api/dishes/${dishId}`, {
    method: "GET",
    //with the body we send data (in the GET request we dont have body)
  }).then<{ dish: Dish }>((response) => response.json());
}

export function updateDish(dish: Dish) {
  return fetch(`/api/dishes/${dish.id}`, {
    method: "PUT",
    //with the body we send data (in the GET request we dont have body)
    body: JSON.stringify(dish),
    //.then() is a promise
  }).then((response) => response.json());
}

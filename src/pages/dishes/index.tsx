import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "src/components/layout";
import { getDishes } from "../menu";
import { type Dish } from "@prisma/client";

export default function DishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    getDishes()
      .then(({ dishes }) => setDishes(dishes))
      .catch(console.log);
  }, []);

  return (
    <Layout>
      <section>
        <h2>Edit Dish</h2>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <Link href={`/dishes/${encodeURIComponent(dish.id)}`}>
                {dish.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

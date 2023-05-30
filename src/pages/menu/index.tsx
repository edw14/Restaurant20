import { type Dish } from "@prisma/client";
import React, { useEffect, useState } from "react";
import MenuCategory from "src/components/MenuCategory";
import Layout from "src/components/layout";

//At "GET" method we dont need parameters
export function getDishes() {
  return fetch("/api/dishes", {
    method: "GET",
    //with the body we send data (in the GET request we dont have body)
  }).then<{ dishes: Dish[] }>((response) => response.json());
}

export default function MenuPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    getDishes()
      .then(({ dishes }) => setDishes(dishes))
      .catch(console.log);
  }, []);

  const sortedDishes: Dish[] = [...dishes].sort((dishA, dishB) => {
    if (dishA.category < dishB.category) {
      return -1;
    }

    if (dishA.category > dishB.category) {
      return 1;
    }

    return 0;
  });

  const sortedDishesByCategory = getDishesByCategory(sortedDishes);

  return (
    <Layout>
      <section>
        <h2>Menu</h2>
        {sortedDishesByCategory.map((dishesByCategory) => {
          return (
            <MenuCategory
              key={dishesByCategory[0]?.category}
              dishes={dishesByCategory}
            />
          );
        })}
      </section>
    </Layout>
  );
}

function getDishesByCategory(dishes: Dish[]) {
  const sortedDishesByCategory: Dish[][] = [];
  const categoryMap = new Map<Dish["category"], number>();

  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];

    if (dish) {
      const categoryIndex = categoryMap.get(dish.category);

      if (typeof categoryIndex === "number") {
        const dishesOfCategory = sortedDishesByCategory[categoryIndex];
        dishesOfCategory?.push(dish);
      } else {
        categoryMap.set(dish.category, sortedDishesByCategory.length);
        sortedDishesByCategory[sortedDishesByCategory.length] = [dish];
      }
    }
  }

  return sortedDishesByCategory;
}

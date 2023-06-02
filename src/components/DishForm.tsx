import React from "react";
import { type Dish } from "src/pages/dishes/[dishId]";
import { useState } from "react";

type Props = {
  onSubmit: (values: Dish) => void;
  dish?: Dish;
};

const DishForm = ({ onSubmit, dish }: Props) => {
  const [name, setName] = useState(dish?.name);
  const [description, setDescription] = useState(dish?.description);
  const [category, setCategory] = useState(dish?.category);
  const [price, setPrice] = useState(dish?.price);
  return (
    <form
      name="dish-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (isDish(values)) {
          onSubmit(values, name, description, category, price);
        }
      }}
    >
      <div>
        <label htmlFor="DishName">Dish Name : </label>
        <input
          id="DishName"
          name="name"
          type="text"
          value={dish?.name}
          required
        />
      </div>

      <div>
        <label htmlFor="DescriptionOfIngredients">
          Description of Ingredients :{" "}
        </label>
        <textarea
          id="DescriptionOfIngredients"
          name="description"
          value={dish?.description}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="CategoryOfField">Category : </label>
        <select id="CategoryOfField" name="category" value={dish?.category}>
          <option></option>
          <option value="appetizer">appetizer</option>
          <option value="soup">soup</option>
          <option value="salad">salad</option>
          <option value="mainCourse">main course</option>
          <option value="dessert">dessert</option>
        </select>
      </div>

      <div>
        <label htmlFor="Price">Price : </label>
        <input
          id="Price"
          name="price"
          type="number"
          value={dish?.price}
          required
        />
      </div>

      <div>
        <button>{dish ? "Edit dish" : "Add dish"}</button>
      </div>
    </form>
  );
};

export default DishForm;

function isDish(values: object): values is Dish {
  if (
    "name" in values &&
    typeof values.name === "string" &&
    "description" in values &&
    typeof values.description === "string" &&
    "category" in values &&
    typeof values.category === "string" &&
    ["appetizer", "salad", "soup", "mainCourse", "dessert"].includes(
      values.category
    ) &&
    "price" in values &&
    typeof values.price === "number"
  ) {
    return true;
  }

  return false;
}

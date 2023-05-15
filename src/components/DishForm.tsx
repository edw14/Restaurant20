import React from "react";

type Props = {
  onSubmit: (values: Record<string, unknown>) => void;
};

const DishForm = ({ onSubmit }: Props) => {
  return (
    <form
      name="dish-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (event.target instanceof HTMLFormElement) {
          const values = Object.fromEntries(
            new FormData(event.target).entries()
          );
          console.log("dish submitted", values);
          onSubmit(values);
        }
      }}
    >
      <div>
        <label htmlFor="DishName">Dish Name : </label>
        <input id="DishName" name="name" type="text" required />
      </div>

      <div>
        <label htmlFor="DescriptionOfIngredients">
          Description of Ingredients :{" "}
        </label>
        <textarea
          id="DescriptionOfIngredients"
          name="description"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="CategoryOfField">Category : </label>
        <select id="CategoryOfField" name="category">
          <option value="appetizer">appetizer</option>
          <option value="soup">soup</option>
          <option value="salad">salad</option>
          <option value="mainCourse">main course</option>
          <option value="dessert">dessert</option>
        </select>
      </div>

      <div>
        <label htmlFor="Price">Price : </label>
        <input id="Price" name="price" type="number" required />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default DishForm;

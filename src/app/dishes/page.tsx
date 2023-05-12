"use client";
import React from "react";

export default function DishesPage() {
  return (
    <section>
      <h2>Dishes</h2>

      <form
        className="flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();

          console.log("clicked", [...new FormData(event.target).entries()]);
        }}
      >
        <div>
          <label htmlFor="DishName" className="mb-2 italic">
            Dish Name :{" "}
          </label>
          <input
            className="mb-4 border-b-2"
            id="DishName"
            name="DishName"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="DescriptionOfIngredients" className="mb-2 italic">
            Description of Ingredients :{" "}
          </label>
          <textarea
            className="mb-4 border-b-2"
            id="DescriptionOfIngredients"
            name="CategoryOfFieldd"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="CategoryOfField" className="mb-2 italic">
            Category :{" "}
          </label>
          <select id="CategoryOfField" name="category">
            <option value="appetizer">appetizer</option>
            <option value="soup">soup</option>
            <option value="salad">salad</option>
            <option value="mainCourse">main course</option>
            <option value="dessert">dessert</option>
          </select>
        </div>

        <div>
          <label htmlFor="Price" className="mb-2 italic">
            Price :{" "}
          </label>
          <input
            className="mb-4 border-b-2"
            id="Price"
            name="Price"
            type="number"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

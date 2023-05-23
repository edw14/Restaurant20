import { type Dish } from "@prisma/client";
import { render, screen } from "@testing-library/react";
import MenuDish from "src/components/MenuDish";
import "@testing-library/jest-dom";

const dish: Dish = {
  name: "xxxxx",
  description: "xxxxxx",
  price: 20,
  id: 1,
  category: "",
  createdAt: new Date(),
};

describe("MenuDish", () => {
  it("displays all 3 properties of MenuDish", () => {
    render(<MenuDish dish={dish} />);

    const dishName = screen.getByRole("heading", {
      name: dish.name,
    });
    expect(dishName).toBeInTheDocument();

    const dishDescription = screen.getByText(dish.description);
    expect(dishDescription).toBeInTheDocument();

    const dishPrice = screen.getByText(dish.price);
    expect(dishPrice).toBeInTheDocument();
  });
});

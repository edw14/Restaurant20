import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DishesPage from "src/pages/dishes";

describe("Dishes form", () => {
  it("has all necessary form fields: name, description, category, price, and Add button", () => {
    render(<DishesPage />);

    const name = screen.getByRole("textbox", {
      name: /Dish Name :/,
    });

    expect(name).toBeInTheDocument();

    const description = screen.getByRole("textbox", {
      name: /Description of Ingredients :/,
    });

    expect(description).toBeInTheDocument();

    const category = screen.getByRole("combobox", {
      name: /Category :/,
    });

    expect(category).toBeInTheDocument();

    const price = screen.getByRole("spinbutton", {
      name: /Price :/,
    });

    expect(price).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: /Add/,
    });

    expect(button).toBeInTheDocument();
  });

  it("can submit the Dish form correctly", () => {
    render(<DishesPage />);

    const name = screen.getByRole("textbox", {
      name: /Dish Name :/,
    });

    const description = screen.getByRole("textbox", {
      name: /Description of Ingredients :/,
    });

    const category = screen.getByRole("combobox", {
      name: /Category :/,
    });

    const price = screen.getByRole("spinbutton", {
      name: /Price :/,
    });

    fireEvent.change(name, { target: { value: "Spaghetti" } });
    fireEvent.change(description, {
      target: { value: "pasta,beef" },
    });
    fireEvent.change(category, { target: { value: "mainCourse" } });
    fireEvent.change(price, { target: { value: "10" } });

    expect(screen.getByRole("form")).toHaveFormValues({
      name: "Spaghetti",
      description: "pasta,beef",
      category: "mainCourse",
      price: 10,
    });
  });
});

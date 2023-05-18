# Functional description

On the Menu page I can browse the restaurant dishes by category.

# Technical description

- Create a new branch to implement this feature.
- Create a new `dishes` endpoint to return a list of dishes from the database. It should respond to a GET request.
- Create a new Menu page with a page title.
- Create a new Component to display a single Dish. Use semantic HTML. The component should display the Dish name and the price in first line separated by `–` in between them. The second line should contain the description.
  ```tsx
  export default function MenuDish({ dish }) {}
  ```
- Create a new Component to display a Dish category. It should display the category name and a list of Dishes. Display the Dishes using the `MenuDish` component.
  ```tsx
  export default function MenuCategory({ categoryName, dishes }) {}
  ```
- Call the `dishes` endpoint on the frontend side.
- Sort the received Dish list by category.
- Create a two-dimensional array from the sorted Dish list, so that each category would be an array of Dishes in the primary array.
- Display the Menu by iterating over the two-dimensional array using the `MenuCategory` component.
- Create a unit test for the MenuDish component.
- Submit a merge request and pass code review.

# Skills

- Can develop using feature branches.
- Can write a backend API endpoint.
- Can Read from CRUD.
- Can pass data between React components.
- Can compose React components.
- Can transform data using JavaScript.
- Can work with JavaScript Arrays.
- Can write unit tests.

# Recommended reads

- How to pass props to a React component: https://react.dev/learn/passing-props-to-a-component
- (CRUD) Read multiple records: https://www.prisma.io/docs/concepts/components/prisma-client/crud#get-all-records
- Array sorting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Multidimensional arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/#multidimensional-arrays

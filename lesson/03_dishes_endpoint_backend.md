# Functional description

On the Dishes page I can add a new dish to the menu.

# Technical description

- Create a new branch to implement this feature.
- Create a separate `DishForm` component in `src/components`, and move the Dish form code from the Dishes page.
- Add an onSubmit prop to `DishForm` component, that receives a callback function, and is called with the form data when the form is submitted.
- On the Dishes page call the `/api/dish` endpoint with the Dish form data.
- Create a new `POST` endpoint in `src/app/api/dish.ts` that can receive a Dish object from the frontend side.
- Create a new `Dish` model in Prisma.
- Validate the incoming Dish fields:
  ```js
  // CreateDishDto validation rules
  { 
    name: ['required', 'string'],
    description: ['required', 'string'],
    category: ['required', { oneOf: ['appetizer', 'soup', 'salad', 'mainCourse', 'dessert'] } ],
    price: ['required', 'number'],
  }
  ```
- Return the relevant HTTP error response if validation fails.
- On successful validation save the data in the database, and return the new Dish in the response.
- Submit a merge request and pass code review.

# Skills

- Can develop using feature branches.
- Can write a backend API endpoint.
- Can validate incoming data.
- Can persist data in a database.
- Understands the basics of the HTTP protocol.
- Can Create from CRUD.

# Recommended reads

- How to pass props to a React component: https://react.dev/learn/passing-props-to-a-component
- API endpoints in Next.js: 
  - The first section of: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
  - Adding TypeScript types: https://nextjs.org/docs/pages/building-your-application/routing/api-routes#adding-typescript-types
- Prisma models: https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
- (CRUD) Create a new record: https://www.prisma.io/docs/concepts/components/prisma-client/crud#create
- About HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

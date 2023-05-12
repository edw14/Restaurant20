# Functional description

From the index page - that I can recognise from the restaurant's brand - I can navigate to the Dishes page. On the Dishes page I can add a new dish to the menu.

# Technical description

- Create a new branch to implement this feature.
- Use plain HTML for the UI. Do not use CSS for now. Try to use semantic HTML to represent the meaning of the UI parts in the document structure.
- Add a navigation bar to all pages as the default layout. The navigation bar displays the restaurant name or brand with a logo, and a list of links to important pages, the first being the Dishes page.
- Add a new Dishes page in Next. The page displays the page title and a form to enter new dishes.
- Add a Dish form that has a field for:
- Dish name of field type text, with label "Dish name".
- Description of ingredients of field type textarea, with label "Description of ingredients".
- Category of field type select with label "Category". The selectable categories are appetizer, soup, salad, main course, dessert.
- Price of field type number with label "price". The currency unit is displayed next to the field as a static text.
- A button with the label "Add" to save the dish.
- When the form is submitted, clear the fields and display the Dish object in the console. To simplify things use plain React features to capture the form state.
- Update the unit test for the home page and write a new unit test for the Dish form. The new test verifies that the Dish form sends the expected Dish object on submit.
- Submit a merge request and pass code review.

# Skills

- Can develop using feature branches.
- Can write and understand semantic HTML (navigation, form).
- Can write a basic form for data input.

# Recommended reads

- pages and routing in Next: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
- feature branch workflow: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
- semantic HTML: https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html
- forms:
- https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
- https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form
- https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form

import Layout from "src/components/layout";

//export is multidimensional for other files
export type Dish = {
  name: string;
  description: string;
  category: "appetizer" | "salad" | "soup" | "mainCourse" | "dessert";
  price: number;
};

export default function EditDishPage() {
  return (
    <Layout>
      <section>
        <h2>Edit Dish</h2>
      </section>
    </Layout>
  );
}

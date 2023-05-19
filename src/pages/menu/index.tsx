import React from "react";
import DishMenu from "src/components/DishMenu";
import Layout from "src/components/layout";

export default function MenuPage() {
  return (
    <Layout>
      <section>
        <h2>Menu</h2>
        <DishMenu dish={DishMenu} />
      </section>
    </Layout>
  );
}

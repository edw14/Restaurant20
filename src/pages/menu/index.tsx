import React from "react";
import Layout from "src/components/layout";

//At "GET" method we dont need parameters
function getDishes() {
  return fetch("/api/dish", {
    method: "GET",
    //with the body we send data (in the GET request we dont have body)
  }).then((response) => response.json());
}

export default function MenuPage() {
  return (
    <Layout>
      <section>
        <h2>Menu</h2>
      </section>
    </Layout>
  );
}

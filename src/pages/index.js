import React from "react";
import { useQuery } from "react-query";
import { fetchShips } from "../api";


import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {

  const {data, isLoading} = useQuery('ships', fetchShips)
  console.log(!isLoading && data)
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      { !isLoading && data.results.map(ship => (
        <p key={ship.name}> { ship.name} </p>
      ))}

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site. Hey there! Welcome to
          your first Gatsby site. Hey there! Welcome to your first Gatsby site.
          Hey there! Welcome to your first Gatsby site. Hey there! Welcome to
          your first Gatsby site. Hey there! Welcome to your first Gatsby site.
          Hey there! Welcome to your first Gatsby site. Hey there! Welcome to
          your first Gatsby site. Hey there! Welcome to your firs 4ct Gatsby site.
          Hey there! Welcome to your first Gatsby site. Hey there! Welcome to
          your first Gatsby site. Hey there! Welcome to your first Gatsby site.
          Hey there! Welcome to your first Gatsby site. Hey there! Welcome to
          your first Gatsby site. Hey there! Welcome to your first Gatsby site.
          Hey there! Welcome to your first Gatsby site.
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;

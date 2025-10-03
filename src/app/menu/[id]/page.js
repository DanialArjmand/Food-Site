import DetailsPage from "@/components/template/DetailsPage";
import { notFound } from "next/navigation";
import React from "react";

export default async function Details({ params }) {
  const id = params.id;

  const res = await fetch(`http://localhost:3001/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    notFound();
  }

  return <DetailsPage data={data} />;
}

export const revalidate = 10;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/data");
  const json = await res.json();
  const data = json.slice(0, 10);

  return data.map((food) => ({
    id: food.id.toString(),
  }));
}

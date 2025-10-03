import MenuPage from "@/components/template/MenuPage";
import React from "react";

export const revalidate = 10;

export default async function Menu() {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();
  console.log(data);
  return <MenuPage data={data} />;
}

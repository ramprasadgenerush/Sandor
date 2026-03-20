import Products from "@/components/Products";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Products",
  description: "Products",
  keywords: ["Products"],
};

const page = () => {
  return <Products />;
};

export default page

import BloodProducts from "@/components/BloodProducts";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Blood Products",
  description: "Blood Products",
  keywords: ["Blood Products"],
};

const page = () => {
  return <BloodProducts />;
};

export default page;

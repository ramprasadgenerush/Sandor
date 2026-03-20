import Simulab from "@/components/Simulab";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simulab Task Trainers",
  description: "Simulab Task Trainers",
  keywords: ["Simulab Task Trainers"],
};

const page = () => {
  return <Simulab />;
};

export default page;

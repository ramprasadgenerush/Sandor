import Veinus from "@/components/Veinus";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Vei Viewer",
  description: "Vei Viewer",
  keywords: ["Vei Viewer"],
};

const page = () => {
  return <Veinus />;
};

export default page;

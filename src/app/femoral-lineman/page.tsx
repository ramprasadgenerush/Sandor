import FemoraLineman from "@/components/FemoraLineman";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Femoral Lineman",
  description: "Femoral Lineman",
  keywords: ["Femoral Lineman"],
};

const page = () => {
  return <FemoraLineman />;
};

export default page;

import RegulatorySupports from "@/components/RegulatorySupports";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Regulatory and Custom House Functions",
  description: "Regulatory and Custom House Functions & Marketing",
  keywords: ["Regulatory and Custom House Functions"],
};

const page = () => {
  return <RegulatorySupports />;
};

export default page;

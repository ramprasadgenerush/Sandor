import PerfusionFluids from "@/components/PerfusionFluids";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Perfusion Fluids",
  description: "Perfusion Fluids",
  keywords: ["Perfusion Fluids"],
};

const page = () => {
  return <PerfusionFluids />;
};

export default page;

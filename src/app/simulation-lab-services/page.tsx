
import SimulationLabServices from "@/components/SimulationLabServices";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simulation Lab Services",
  description: "Simulation Lab Services",
  keywords: ["Simulation Lab Services"],
};

const page = () => {
  return <SimulationLabServices />;
};

export default page;

import HealthcareTrainingSimulators from "@/components/HealthcareTrainingSimulators";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simulation Portfolio",
  description: "Simulation Portfolio",
  keywords: ["Simulation Portfolio"],
};

const page = () => {
  return <HealthcareTrainingSimulators />;
};

export default page;

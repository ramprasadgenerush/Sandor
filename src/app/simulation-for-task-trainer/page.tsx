import SimulationforTaskTrainer from "@/components/SimulationforTaskTrainer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Simulation for Task Trainers",
  description: "Simulation for Task Trainers",
  keywords: ["Simulation for Task Trainers"],
};

const page = () => {
  return <SimulationforTaskTrainer />;
};

export default page;

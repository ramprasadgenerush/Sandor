import ParacentesisTrainer from "@/components/ParacentesisTrainer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Paracentesis Trainer",
  description: "Paracentesis Trainer",
  keywords: ["Paracentesis Trainer"],
};

const page = () => {
  return <ParacentesisTrainer />;
};

export default page;

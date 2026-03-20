import SurgicalSimulators from "@/components/SurgicalSimulators";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Surgical Simulators",
  description: "SurgicalSimulators",
  keywords: ["SurgicalSimulators"],
};

const page = () => {
  return <SurgicalSimulators />;
};

export default page;

import PatientSimulators from "@/components/PatientSimulators";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Patient Simulators",
  description: "PatientSimulators",
  keywords: ["PatientSimulators"],
};

const page = () => {
  return <PatientSimulators />;
};

export default page;

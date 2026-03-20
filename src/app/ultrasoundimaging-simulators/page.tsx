import UltrasoundimagingSimulators from "@/components/UltrasoundimagingSimulators";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Advanced Intelligent Ultrasound Imaging Simulators",
  description: "Advanced Intelligent Ultrasound Imaging Simulators",
  keywords: ["Advanced Intelligent Ultrasound Imaging Simulators"],
};

const page = () => {
  return <UltrasoundimagingSimulators />;
};

export default page;

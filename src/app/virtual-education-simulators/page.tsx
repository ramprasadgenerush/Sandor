import VirtualEducationSimulators from "@/components/VirtualEducationSimulators";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: " Task Trainers for UG /PG Medical / Nursing Communities",
  description: " Task Trainers for UG /PG Medical / Nursing Communities",
  keywords: [" Task Trainers for UG /PG Medical / Nursing Communities"],
};

const page = () => {
  return <VirtualEducationSimulators />;
};

export default page;

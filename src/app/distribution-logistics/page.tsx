import DistributionLogistics from "@/components/DistributionLogistics";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Distribution & Logistics",
  description: "Distribution & Logistics",
  keywords: ["Distribution & Logistics"],
};

const page = () => {
  return <DistributionLogistics />;
};

export default page;

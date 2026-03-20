import PointOfCareTechnology from "@/components/PointOfCareTechnology";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Point Of Care Technology",
  description: "Point Of Care Technology",
  keywords: ["Point Of Care Technology"],
};

const page = () => {
  return <PointOfCareTechnology />;
};

export default page;

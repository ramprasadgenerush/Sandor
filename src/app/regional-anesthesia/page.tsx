import RegionalAnesthesia from "@/components/RegionalAnesthesia";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Regional Anesthesia",
  description: "Regional Anesthesia",
  keywords: ["Regional Anesthesia"],
};

const page = () => {
  return <RegionalAnesthesia />;
};

export default page;

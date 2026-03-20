import CentralLineman from "@/components/CentralLineman";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Central Lineman",
  description: "Central Lineman",
  keywords: ["Central Lineman"],
};

const page = () => {
  return <CentralLineman />;
};

export default page;

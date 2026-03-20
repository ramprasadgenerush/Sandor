import ReverseOsmosisSystem from "@/components/ReverseOsmosisSystem";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Reverse Osmosis System ",
  description: "Reverse Osmosis System ",
  keywords: ["Reverse Osmosis System"],
};

const page = () => {
  return <ReverseOsmosisSystem />;
};

export default page;

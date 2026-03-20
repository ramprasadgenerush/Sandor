import Reprocessor from "@/components/Reprocessor";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Renal Portfolio",
  description: "Renal Portfolio",
  keywords: ["Renal Portfolio"],
};

const page = () => {
  return <Reprocessor />;
};

export default page;

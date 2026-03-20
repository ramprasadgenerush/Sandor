import DialysisServices from "@/components/DialysisServices";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Dialysis Services",
  description: "Dialysis Services",
  keywords: ["Dialysis Services"],
};

const page = () => {
  return <DialysisServices />;
};

export default page;

import SanHgb from "@/components/SanHgb";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "SanHgb",
  description: "SanHgb",
  keywords: ["SanHgb"],
};

const page = () => {
  return <SanHgb />;
};

export default page;

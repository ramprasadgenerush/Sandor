import TrueCorp from "@/components/TrueCorp";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "True Corp Task Trainers",
  description: "True Corp Task Trainers",
  keywords: ["True Corp Task Trainers"],
};

const page = () => {
  return <TrueCorp />;
};

export default page;

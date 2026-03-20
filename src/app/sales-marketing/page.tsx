import SalesMarketing from "@/components/SalesMarketing";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Sales & Marketing",
  description: "Sales & Marketing",
  keywords: ["Sales & Marketing"],
};

const page = () => {
  return <SalesMarketing />;
};

export default page;

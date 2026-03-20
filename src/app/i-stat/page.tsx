import IStat from "@/components/IStat";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "i-Stat",
  description: "i-Stat",
  keywords: ["i-Stat"],
};

const page = () => {
  return <IStat />;
};

export default page;

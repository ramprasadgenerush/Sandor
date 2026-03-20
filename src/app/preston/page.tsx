import Preston from "@/components/Preston";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Preston Task Trainers",
  description: "Preston Task Trainers",
  keywords: ["Preston Task Trainers"],
};

const page = () => {
  return <Preston />;
};

export default page;

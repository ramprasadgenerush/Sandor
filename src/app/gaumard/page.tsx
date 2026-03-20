
import Gaumard from "@/components/Gaumard";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Gaumard Task Trainers",
  description: "Gaumard Task Trainers",
  keywords: ["Gaumard Task Trainers"],
};

const page = () => {
  return <Gaumard />;
};

export default page;

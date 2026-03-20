import LumbarPunctureEpidural from "@/components/LumbarPunctureEpidural";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Lumbar Puncture Epidural",
  description: "Lumbar Puncture Epidural",
  keywords: ["Lumbar Puncture Epidural"],
};

const page = () => {
  return <LumbarPunctureEpidural />;
};

export default page;

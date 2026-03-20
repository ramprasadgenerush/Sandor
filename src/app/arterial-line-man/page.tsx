import Arteriallineman from "@/components/Arteriallineman";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Arterial LineMan",
  description: "Arterial LineMan",
  keywords: ["Arterial LineMan"],
};

const page = () => {
  return <Arteriallineman />;
};

export default page;

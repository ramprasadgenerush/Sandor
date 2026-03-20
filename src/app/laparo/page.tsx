import Laparo from "@/components/Laparo";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Laparo’s surgical simulators",
  description: "Laparo’s surgical simulators",
  keywords: ["Laparo’s surgical simulators"],
};

const page = () => {
  return <Laparo />;
};

export default page;

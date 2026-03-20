import CoagusensePtinrMonitoringSystem from "@/components/CoagusensePtinrMonitoringSystem";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "CoaguSense PT/INR Monitoring System",
  description: "CoaguSense PT/INR Monitoring System",
  keywords: ["CoaguSense PT/INR Monitoring System"],
};

const page = () => {
  return <CoagusensePtinrMonitoringSystem />;
};

export default page;

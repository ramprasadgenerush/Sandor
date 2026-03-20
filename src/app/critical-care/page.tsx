
import CriticalCare from "@/components/CriticalCare";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Critical Care',
  description: 'Critical Care',
  keywords: ["Critical Care"]
}

const page = () => {


  return (

    <CriticalCare />

  );

};

export default page;

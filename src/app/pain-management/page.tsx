
import PainManagement from "@/components/PainManagement";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Pain Management',
  description: 'Pain Management',
  keywords: ["Pain Management"]
}

const page = () => {


  return (

    <PainManagement />

  );

};

export default page;

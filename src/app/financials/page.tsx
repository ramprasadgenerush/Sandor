

import Financials from "@/components/financials";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Financials',
  description: 'Financials',
  keywords: ["Financials"]
}

const page = () => {


  return (

    <Financials />


  );

};

export default page;

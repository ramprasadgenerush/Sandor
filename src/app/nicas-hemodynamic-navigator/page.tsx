
import NicasHemoDynamicNavigator from "@/components/NicasHemoDynamicNavigator";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'NICaS Hemodynamic Navigator',
  description: 'NICaS Hemodynamic Navigator',
  keywords: ["NICaS Hemodynamic Navigator"]
}

const page = () => {


  return (

    <NicasHemoDynamicNavigator />


  );

};

export default page;

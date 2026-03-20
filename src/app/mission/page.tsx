
import Mission from "@/components/Mission";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Mission',
  description: 'Mission',
  keywords: ["Mission"]
}

const page = () => {


  return (

    <Mission />


  );

};

export default page;

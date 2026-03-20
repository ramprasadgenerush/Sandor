
import About from "@/components/About";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us',
  keywords: ["About Us"]
}

const page = () => {


  return (

    <About />


  );

};

export default page;

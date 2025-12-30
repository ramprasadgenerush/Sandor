
import { Metadata } from "next";
import React from "react";
import Home from '@/components/Home';
export const metadata: Metadata = {
  title: 'Welcome to Frutin Home',
  description: 'Organic foods are produced through a farming',
  keywords: ["Organic foods are produced through a farming system that avoids the use of synthetic pesticides, herbicides, genetically"]
}

const page = () => {


  return (

    <Home />


  );

};

export default page;

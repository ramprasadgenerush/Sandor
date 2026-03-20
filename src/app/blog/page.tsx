
import Blog from "@/components/Blog";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog',
  keywords: ["Blog"]
}

const page = () => {


  return (

    <Blog />


  );

};

export default page;


import MessageFromDirector from "@/components/MessageFromDirector";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Message from Director',
  description: 'Message from Director',
  keywords: ["Message from Director"]
}

const page = () => {


  return (

    <MessageFromDirector />


  );

};

export default page;

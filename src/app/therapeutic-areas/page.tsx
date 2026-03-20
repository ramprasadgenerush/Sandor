
import TherapeuticAreas from "@/components/TherapeuticAreas";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Therapeutic Areas',
  description: 'Therapeutic Areas',
  keywords: ["Therapeutic Areas"]
}

const page = () => {


  return (

    <TherapeuticAreas />

  );

};

export default page;

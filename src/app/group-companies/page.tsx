

import GroupCompanies from "@/components/GroupCompanies";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'Group Companies',
  description: 'Group Companies',
  keywords: ["Group Companies"]
}

const page = () => {


  return (

    <GroupCompanies />

  );

};

export default page;

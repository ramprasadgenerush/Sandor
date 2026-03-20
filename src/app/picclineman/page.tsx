import Picclineman from "@/components/Picclineman";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Picc LineMan",
  description: "Picc LineMan",
  keywords: ["Picc LineMan"],
};

const page = () => {
  return <Picclineman />;
};

export default page;

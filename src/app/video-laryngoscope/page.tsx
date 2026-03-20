import VideoLaryngoscope from "@/components/VideoLaryngoscope";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Video Laryngoscope",
  description: "Video Laryngoscope",
  keywords: ["Video Laryngoscope"],
};

const page = () => {
  return <VideoLaryngoscope />;
};

export default page;

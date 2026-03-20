import type { Metadata } from "next";
<<<<<<< HEAD

import Script from "next/script";
import { Poppins } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
=======
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
import "./globals.css";

// Import global styles directly to fix "no-css-tags" warnings
import "../../public/assets/css/fontawesome-all.css";
import "../../public/assets/webfonts/themify-icons/themify-icons.css";
import "../../public/assets/webfonts/flaticon/flaticon.css";
import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/default.css";
import "../../public/assets/css/jquery-fancybox.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/owl-carousel.css";
import "../../public/assets/css/owl-theme-default.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/main.css";
<<<<<<< HEAD
import "../../public/assets/css/nav.css";
import "../../public/assets/css/custom.css";
=======
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5

// import "/assets/css/custom.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

<<<<<<< HEAD
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
=======
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
});

export const metadata: Metadata = {
  title: "Welcome to Sandor",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  return (
    <html
      lang="en"
      className={`${robotoCondensed.variable} ${poppins.variable}`}
    >
      <body>
        <div className="page-wrapper">
          <Header />

          {children}

          <>
            {/* Use Next.js Script component to fix "no-sync-scripts" errors */}
            <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
            <Script src="/assets/js/popper.js" />
            <Script src="/assets/js/bootstrap.js" />
            <Script src="/assets/js/feather.js" />
            <Script src="/assets/js/isotope-pkgd.js" />
            <Script src="/assets/js/jquery-counterup.js" />
            <Script src="/assets/js/jquery-easing.js" />
            <Script src="/assets/js/jquery-fancybox.js" />
            <Script src="/assets/js/jquery-meanmenu.js" />
            <Script src="/assets/js/jquery-nice-select.js" />
            <Script src="/assets/js/jquery-waypoints.js" />
            <Script src="/assets/js/one-page-nav.js" />
            <Script src="/assets/js/owl-carousel.js" />
            <Script src="/assets/js/slick.js" />
            <Script src="/assets/js/wow.js" />
            <Script src="/assets/js/main.js" />
            <Script src="/assets/js/nav.js" />
          </>

          <Footer />
        </div>
=======

  return (

    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          <div className="page-wrapper"> 

        <Header />
        
        {children}

        <>

        {/* Use Next.js Script component to fix "no-sync-scripts" errors */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.js" />
        <Script src="/assets/js/bootstrap.js" />
        <Script src="/assets/js/feather.js" />
        <Script src="/assets/js/isotope-pkgd.js" />
        <Script src="/assets/js/jquery-counterup.js" />
        <Script src="/assets/js/jquery-easing.js" />
        <Script src="/assets/js/jquery-fancybox.js" />
        <Script src="/assets/js/jquery-meanmenu.js" />
        <Script src="/assets/js/jquery-nice-select.js" />
        <Script src="/assets/js/jquery-waypoints.js" />
        <Script src="/assets/js/one-page-nav.js" />
        <Script src="/assets/js/owl-carousel.js" />
        <Script src="/assets/js/slick.js" />
        <Script src="/assets/js/wow.js" />
        <Script src="/assets/js/main.js" />

        </>

        <Footer />

        </div>

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
      </body>
    </html>
  );
}

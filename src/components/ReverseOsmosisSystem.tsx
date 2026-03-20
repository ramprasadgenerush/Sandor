"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ReverseOsmosisSystem = () => {
  return (
    <>
      <section
        className="breadcrumb1"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)",
        }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">Reverse Osmosis System</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Reverse Osmosis System</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 ">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h5
                    className="heading1__title"
                    style={{
                      fontSize: "35px",
                    }}
                  >
                    Reverse Osmosis <span>System</span>
                  </h5>
                  <h3 className="text-primary-emphasis">M4 Series RO</h3> <br />
                  <h4> Reverse Osmosis System 50 Hz 2,200 to 13,200 GPD</h4>
                  <p>
                    Our M4 Series RO machines are designed for international
                    medical applications. M4 systems are know for durable
                    operation, high quality product water production, easy
                    installation and straightforward control. In addition, the
                    M4 Series Reverse Osmosis System is manufactured in an FDA
                    registered facility.
                  </p>
                  <h3 className="text-primary">Standard Features</h3>
                  <ul className="round">
                    <li>Low-energy design reduces electrical</li>
                    <li>requirements and operating costs</li>
                    <li>5-micron pre-fi lter</li>
                    <li>Automatic inlet shut-off valve</li>
                    <li>Permeate and concentrate fl ow meters</li>
                    <li>Remote machine on/off capability</li>
                    <li>Thermal motor protection</li>
                    <li>
                      Pre/Post-fi lter, primary, and fi nal pressure gauges
                    </li>
                    <li>
                      Flow control center including concentrate and recycle
                      valves
                    </li>
                    <li>Autofl ush system</li>
                    <li>Low inlet pressure switch</li>
                    <li>Digital conductivity meter</li>
                    <li>Alarms: Low inlet pressure, motor starter overload</li>
                    <li>
                      Chemically compatible with 1% Minncare® Cold Sterilant
                      disinfectant solution
                    </li>
                  </ul>
                  <h3 className="text-primary-emphasis ">23G Series RO </h3>{" "}
                  <br />
                  <h4>Reverse Osmosis System 3,000 to 16,500 GPD 60 Hz</h4>
                  <p>
                    Hemodialysis providers and patients around the world depend
                    on the 23G reverse osmosis system for push button simplicity
                    and reliability. The 23G Series RO is registered with the
                    FDA as a Class II Medical Device and is designed and tested
                    to meet AAMI grade water standards according to
                    ANSI/AAMI/ISO 13959:2009 for RO product water.
                  </p>
                  <h3 className="text-primary">Standard Features</h3>
                  <ul className="round">
                    <li>Quiet TEFC high efficiency pump</li>
                    <li>
                      Free standing design makes installation and maintenance
                      easy
                    </li>
                    <li>Autoflush system</li>
                    <li>Unique expandable frame to increase output</li>
                    <li>Adjustable Flow Block</li>
                    <li>Quality tested spiral wound elements</li>
                    <li>Quick-connect permeate manifold service ports</li>
                    <li>Centralized, user friendly monitoring panel</li>
                    <li>Permeate divert to ensure high quality product</li>
                    <li>
                      Chemically compatible with 1% Minncare® Cold Sterilant
                      disinfectant solution
                    </li>
                    <li>Remote Alarm</li>
                    <li>Set of Locking casters</li>
                  </ul>
                  <div className="heading1 mt-25">
                    <a href="" className="btn1">
                      Request A Demo
                    </a>
                  </div>
                  {/* Site BTN */}
                </div>
              </div>
               <div className="col-lg-1"> </div>
              <div className="col-lg-4 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-13.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReverseOsmosisSystem;

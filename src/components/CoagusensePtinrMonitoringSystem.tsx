"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CoagusensePtinrMonitoringSystem = () => {
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
                  <h3 className="breadcrumb1__title">
                    CoaguSense PT/INR Monitoring System
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>CoaguSense PT/INR Monitoring System</span>
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
                  <h2
                    className="heading1__title "
                    style={{
                      fontSize: "21px",
                    }}
                  >
                    CoaguSense PT/INR Monitoring System{" "}
                    <span> INR Monitoring System</span>
                  </h2>
                  <p>
                    <b>CoaguSense </b> is the first PT/INR system to directly
                    detect clot formation representing a breakthrough in PT/INR
                    testing design simplicity.
                  </p>
                  <p>
                    Two million new people start taking the oral anticoagulant
                    drug Warfarin every year to prevent blood clots, heart
                    attacks and stroke. Correct dosing of Warfarin is determined
                    for each patient by periodically measuring blood clotting
                    time using the prothrombin time (PT) test. The simplicity of
                    the new Coagu-Sense system offers clinicians not only the
                    performance they require but also the reliability they
                    demand. With the recent expansion in medicare coverage, most
                    patients on Warfarin can now easily test their PT/INR with
                    confidence in their own home.
                  </p>

                  <h4 className="mt-3">Key Features :</h4>

                  <ul className="round">
                    <li>A convenient tool for in-office testing</li>
                    <li>Simple & accurate sample collection</li>
                    <li>A more direct approach to INR testing</li>
                    <li>It has CE Marking</li>
                  </ul>

                  <div className="heading1 mt-35">
                    <a href="" className="btn1">
                      Request A Demo
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-07.jpg"
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

export default CoagusensePtinrMonitoringSystem;

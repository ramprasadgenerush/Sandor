"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SurgicalSimulators = () => {
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
                  <h3 className="breadcrumb1__title">Surgical Simulators</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Surgical Simulators</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 pb-0 ">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-26.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title">
                    Surgical <span>Simulators</span>
                  </h2>
                  <h3>Laparoscopic Simulators</h3>
                  <p>
                    <b>Lap X – Laparoscopic Surgical Simulator</b> with 4
                    different platforms to fulfil different requirements of
                    healthcare professionals
                  </p>
                  <ul className="round">
                    <li>Lap X Hybrid</li>
                    <li>Lap X VR</li>
                    <li>Lap X Box Pro</li>
                    <li>Lap X Box</li>
                  </ul>

                  {/* Site BTN */}
                  <div className="heading1">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 ">
        <div className="content_box_120_70 pt-0 pb-0  ">
          <div className="container_m_40 container_l">
            <div className="row mb-40">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h3>Endovascular Simulators</h3>

                  <ul className="round">
                    <li>Vist Lab</li>
                    <li>Vist G5</li>
                    <li>Vist G7/G7+</li>
                    <li>Vist Radiation Safety</li>
                  </ul>

                  <h3>Software Solutions </h3>
                  <ul className="round">
                    <li>Subscription</li>
                    <li>Software</li>
                  </ul>

                  <div className="heading1 mb-35">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding ">
                <div className="whyChooseUs2__thumb pe-0">
                  <img
                    src="/assets/img/who-we-are/image-27.jpg"
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

export default SurgicalSimulators;

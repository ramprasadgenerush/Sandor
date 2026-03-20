"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const VirtualEducationSimulators = () => {
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
                    Virtual Education Simulators
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Virtual Education Simulators</span>
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
                    src="/assets/img/who-we-are/image-28.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title" style={{ fontSize: "40px" }}>
                    Virtual Education <span>Simulators</span>
                  </h2>
                  <h3>
                    Body Interact Clinical Virtual Education Patient Simulator
                  </h3>
                  <p className="mt-3 mb-4">
                    Body Interact, Portugal based , supports the effective
                    practice of clinical reasoning and decision making skills
                    through realistic virtual patient scenarios.
                  </p>

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
            <div className="row mb-80">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h3>SimVs Simulation</h3>

                  <p className="mb-5">
                    SimVS Simulation Platform – Hospital Monitor, Defibrillator,
                    and Ventisim.
                  </p>

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
                    src="/assets/img/who-we-are/image-29.png"
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

export default VirtualEducationSimulators;
